import DateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import moment from "moment";
import { Form, Input, Item, Picker, Text, View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Action } from "redux";
import EnumHelper from "../../Helpers/EnumHelper";
import FormHelper from "../../Helpers/FormHelper";
import Club from "../../Models/Club";
import Profile from "../../Models/Users/Profile";
import User from "../../Models/Users/User";
import styles from "./Style";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import { connect } from "react-redux";
import GeoHelper from "../../Helpers/GeoHelper";
import Departement from "../../Models/Geo/Departments";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Region from "../../Models/Geo/Region";

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
  const [selectedDepartments, setSelectedDepartments] = useState(
    user.favoriteDepartmentCodes
  );
  //#endregion

  //#region Fields
  /**Regions to display */
  const regions = GeoHelper.getRegions(true);

  /**If the user has changed the selection */
  let hasChangedSelection: boolean = false;
  //#endregion

  //#region Methods

  /**
   * Update a field of the user object
   * @param field Field to update
   * @param value Value to set
   */
  const updateField = (field: string, value: any) => {
    FormHelper.updateField<User>(user, field, value, setUser);
    const newUser: User = {
      ...user
    };
    newUser[_.camelCase(field)] = value;
    setUser(newUser);
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

  // /**
  //  * Save the user
  //  */
  // const saveUser = () => {
  //   try {
  //     dispatch(saveUserAction(user));
  //     Toast.show({
  //       text: "Enregistrement réussi !",
  //       type: "success"
  //     });
  //     navigation.goBack();
  //   } catch (error) {
  //     Toast.show({
  //       text: "Erreur lors de l'enregistrement",
  //       type: "danger"
  //     });
  //   }
  // };
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
            {EnumHelper.getValues(Profile).map(x => (
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
          <View style={{ flex: 1 }}>
            <SectionedMultiSelect
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
            ></SectionedMultiSelect>
          </View>
        </Item>
      </Form>
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
