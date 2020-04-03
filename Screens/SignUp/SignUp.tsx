import DateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import moment from "moment";
import { Button, Form, Input, Item, Picker, Text, Toast } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { Action } from "redux";
import AppPicker from "../../Components/Shared/AppPicker/AppPicker";
import Club from "../../Models/Club";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import Profile from "../../Models/Users/Profile";
import User from "../../Models/Users/User";
import { editUserAction } from "../../Store/Actions/Creators/userAction.creator";
import styles from "./Style";
import getRegions from "../../Helpers/Geo/getRegions";
import updateFormField from "../../Helpers/Form/updateFormField";
import getEnumValues from "../../Helpers/Enums/getEnumValues";

interface SignUpProps {
  clubs: Club[];
  route: any;
  navigation: any;
  dispatch: (action: Action) => void;
}

const SignUp: FunctionComponent<SignUpProps> = props => {
  //#region State
  /** User to edit */
  const [user, setUser] = useState(
    (props.route?.params?.user ? props.route.params.user : new User()) as User
  );
  /**Display or not the date picker */
  const [showDatePicker, setShowDatePicker] = useState(false);
  /**Selected departments */
  const [selectedDepartments, setSelectedDepartments] = useState(
    user.favoriteDepartmentCodes
  );
  /**Input password */
  const [password, setPassword] = useState(null);
  //#endregion

  //#region Fields
  /**Regions to display */
  const regions = getRegions(true);
  regions.forEach(region => {
    region.code = "Region-" + region.code;
  });

  /**If the user has changed the selection */
  let hasChangedSelection: boolean = false;
  //#endregion

  //#region Methods

  /**
   * Update a field of the user object
   * @param field Field to update
   * @param value Value to set
   */
  const updateField = <TField extends any>(field: string, value: TField) => {
    updateFormField<User, TField>(user, field, value, setUser);
  };

  /**
   * Update the birth date
   * @param date Birth date
   */
  const updateBirthDate = (date: Date) => {
    setShowDatePicker(false);
    updateField("birthDate", date);
  };

  /**
   * Update the user club
   * @param club Club
   */
  const updateClub = (club: Club) => {
    if (club) {
      updateField("clubId", club.id);
    } else {
      updateField("clubId", null);
    }
    updateField("club", club);
  };

  /**
   * Update the favorite departements
   * @param departments Favorite departements
   */
  const setToggledDepartements = (selectedDepartmentCodes: string[]) => {
    setSelectedDepartments(selectedDepartmentCodes);
  };

  /**
   * Confirm the favorite departments
   */
  const confirmFavoriteDepartments = () => {
    if (hasChangedSelection) {
      //Get the departments with the codes
      const departments = regions.flatMap(x => x.departments);
      updateField(
        "favoriteDepartments",
        departments.filter(dep => selectedDepartments.includes(dep.code))
      );
      updateField("favoriteDepartmentCodes", selectedDepartments);
    }
    resetTempFavoriteDepartments();
  };

  /**
   * Reset the values for the temps departments selection
   */
  const resetTempFavoriteDepartments = () => {
    if (hasChangedSelection) {
      hasChangedSelection = false;
      setSelectedDepartments(user.favoriteDepartmentCodes);
    }
  };

  /**
   * Display the selected departments numbers
   * @param props Picker props
   */
  const renderSelectText = props => {
    let deps = "";
    if (selectedDepartments) {
      _.sortBy(selectedDepartments).forEach(dep => {
        if (deps !== "") deps += " - ";
        deps += dep;
      });
    }

    return deps !== "" ? deps : props.selectText;
  };

  /**
   * Update the password
   * @param value New password
   */
  const updatePassword = value => {
    if (value === password) {
      updateField("password", value);
    }
  };

  /**
   * Save the user
   */
  const saveUser = () => {
    try {
      props.dispatch(editUserAction(user));
      Toast.show({
        text: "Enregistrement réussi !",
        type: "success"
      });
      props.navigation.goBack();
    } catch (error) {
      Toast.show({
        text: "Erreur lors de l'enregistrement",
        type: "danger"
      });
    }
  };
  //#endregion

  return (
    <SafeAreaView>
      <Text style={styles.title}>Parlez nous de vous</Text>
      <Form>
        {/**User name */}
        <Item>
          <Input
            value={user.name}
            autoFocus={(!__DEV__ && !user.name) || user.name === ""}
            placeholder="Nom de famille"
            onChangeText={value => updateField("name", value)}
          ></Input>
        </Item>
        {/**First name */}
        <Item>
          <Input
            placeholder="Prénom"
            onChangeText={value => updateField("firstName", value)}
          ></Input>
        </Item>
        {/**User date*/}
        <Item>
          <Input
            placeholder="Date de naissance"
            onTouchStart={() => setShowDatePicker(true)}
            value={user?.birthDate ? moment(user?.birthDate).format("L") : ""}
          ></Input>
          {showDatePicker && (
            <DateTimePicker
              mode="date"
              onTouchCancel={() => setShowDatePicker(false)}
              value={user?.birthDate ? user?.birthDate : new Date()}
              display="calendar"
              onChange={(event, date) => updateBirthDate(date)}
            />
          )}
        </Item>
        {/**Profile */}
        <Item>
          <Picker
            mode="dialog"
            enabled={true}
            inlineLabel={true}
            placeholder="Type d'utilisateur"
            selectedValue={user?.profile ? user?.profile : Profile.Player}
            onValueChange={value => updateField("profile", value)}
          >
            {getEnumValues(Profile).map(x => (
              <Picker.Item
                label={x.toString()}
                value={x}
                key={x.toString()}
              ></Picker.Item>
            ))}
          </Picker>
        </Item>
        {/**Club */}
        <Item>
          <Picker
            mode="dialog"
            inlineLabel={true}
            placeholder="Club"
            selectedValue={user?.club}
            onValueChange={value => updateClub(value)}
          >
            {/**Item with null value */}
            <Picker.Item
              label={"Sélectionner votre club"}
              value={null}
              key={"NullValue"}
            ></Picker.Item>
            {/* Items */}
            {props.clubs &&
              props.clubs.map(club => (
                <Picker.Item
                  label={club.name}
                  value={club}
                  key={club.id.toString()}
                ></Picker.Item>
              ))}
          </Picker>
        </Item>
        {/* Departements to display */}
        <Item>
          <AppPicker
            items={regions}
            uniqueKey="code"
            subKey="departments"
            displayKey="name"
            selectText="Départements favoris"
            searchPlaceholderText="Départements favoris"
            readOnlyHeadings={true}
            confirmText="Confirmer"
            selectedItems={selectedDepartments}
            onSelectedItemsChange={setToggledDepartements}
            onConfirm={confirmFavoriteDepartments}
            onCancel={resetTempFavoriteDepartments}
            showChips={false}
            selectedText="sélectionnés"
            renderSelectText={renderSelectText}
          ></AppPicker>
        </Item>
        {/**Email */}
        <Item>
          <Input
            value={user.email}
            placeholder="Adresse mail"
            onChangeText={value => updateField("email", value)}
          ></Input>
        </Item>
        {/* Password */}
        <Item>
          <Input
            secureTextEntry={true}
            placeholder="Mot de passe"
            onChangeText={value => setPassword(value)}
          ></Input>
        </Item>
        {/* Confirmation */}
        <Item>
          <Input
            secureTextEntry={true}
            placeholder="Confirmer le mot de passe"
            onChangeText={value => updatePassword(value)}
          ></Input>
        </Item>
      </Form>
      <Button block danger onPress={saveUser}>
        <Text style={{ color: "white" }}>Valider</Text>
      </Button>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action)
  };
};

const mapStateToProps = (state: PetanquePlanningState) => {
  return {
    clubs: state.clubs
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
