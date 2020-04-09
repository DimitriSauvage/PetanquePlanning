import DateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import moment from "moment";
import { Button, Form, Input, Item, Picker, Text, Toast } from "native-base";
import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { compose } from "wizhooks/lib";
import AppSectionedPicker from "../../Components/Shared/AppSectionedPicker/AppSectionedPicker";
import getEnumValues from "../../Helpers/Enums/getEnumValues";
import updateFormField from "../../Helpers/Form/updateFormField";
import getRegions from "../../Helpers/Geo/getRegions";
import Club from "../../Models/Club";
import Profile from "../../Models/Users/Profile";
import User from "../../Models/Users/User";
import useSignIn from "../../Repositories/Authentication/useSignIn";
import withKeyboardAvoidingView from "../../Shared/HOC/withKeyboardAvoidingView";
import withSafeAreaView from "../../Shared/HOC/withSafeAreaView";
import { editUserAction } from "../../Store/Actions/Creators/userAction.creator";
import PetanquePlanningState from "../../Store/States/PetanquePlanningState";
import styles from "./Style";
import AppInput from "../../Components/Shared/AppInput/AppInput";
import AppPicker from "../../Components/Shared/AppPicker/AppPicker";
import mapDispatchToProps from "../../Store/mapDispatchToProps";
import mapStateToProps from "../../Store/mapStateToProps";

interface SignUpProps {
  clubs: Club[];
  route: any;
  navigation: any;
  dispatch: (action: Action) => void;
}

const SignUp: FunctionComponent<SignUpProps> = (props) => {
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
  const SignInManager = useSignIn();
  //#endregion

  //#region Fields
  /**Regions to display */
  const regions = getRegions(true);
  regions.forEach((region) => {
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
      const departments = regions.flatMap((x) => x.departments);
      updateField(
        "favoriteDepartments",
        departments.filter((dep) => selectedDepartments.includes(dep.code))
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
  const renderSelectText = (props) => {
    let deps = "";
    if (selectedDepartments) {
      _.sortBy(selectedDepartments).forEach((dep) => {
        if (deps !== "") deps += " - ";
        deps += dep;
      });
    }

    return deps !== "" ? deps : "";
  };

  /**
   * Update the password
   * @param value New password
   */
  const updatePassword = (value) => {
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
      //Set password && email to sign in the user
      SignInManager.setEmail(user.email);
      SignInManager.setPassword(user.password);
      SignInManager.launchSignIn();
      useEffect(() => {
        if (!SignInManager.ongoing) {
          Toast.show({
            text: "Enregistrement réussi !",
            type: "success",
          });
          props.navigation.goBack();
        }
      }, [SignInManager.ongoing]);
    } catch (error) {
      Toast.show({
        text: "Erreur lors de l'enregistrement",
        type: "danger",
      });
    }
  };
  //#endregion

  return (
    <>
      <Text style={styles.title}>Parlez nous de vous</Text>
      <Form>
        {/**User name */}
        <AppInput
          value={user.name}
          autoFocus={(!__DEV__ && !user.name) || user.name === ""}
          label="Nom de famille"
          onChangeText={(value) => updateField("name", value)}
        ></AppInput>
        {/**First name */}
        <AppInput
          label="Prénom"
          onChangeText={(value) => updateField("firstName", value)}
        ></AppInput>
        {/**User date*/}
        <AppInput
          label="Date de naissance"
          onTouchStart={() => setShowDatePicker(true)}
          value={user?.birthDate ? moment(user?.birthDate).format("L") : ""}
        ></AppInput>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            onTouchCancel={() => setShowDatePicker(false)}
            value={user?.birthDate ? user?.birthDate : new Date()}
            display="calendar"
            onChange={(event, date) => updateBirthDate(date)}
          />
        )}
        {/**Profile */}
        <AppPicker
          mode="dialog"
          enabled={true}
          inlineLabel={true}
          label="Type d'utilisateur"
          selectedValue={user?.profile ? user?.profile : Profile.Player}
          onValueChange={(value) => updateField("profile", value)}
        >
          {getEnumValues(Profile).map((x) => (
            <Picker.Item
              label={x.toString()}
              value={x}
              key={x.toString()}
            ></Picker.Item>
          ))}
        </AppPicker>
        {/**Club */}
        <AppPicker
          mode="dialog"
          inlineLabel={true}
          label="Club"
          selectedValue={user?.club}
          onValueChange={(value) => updateClub(value)}
          enabled={props.clubs?.length > 0}
        >
          {/**Item with null value */}
          <Picker.Item
            label={props.clubs?.length > 0 ? "" : "Aucun club enregistré"}
            value={null}
            key={"NullValue"}
          ></Picker.Item>
          {/* Items */}
          {props.clubs &&
            props.clubs.map((club) => (
              <Picker.Item
                label={club.name}
                value={club}
                key={club.id.toString()}
              ></Picker.Item>
            ))}
        </AppPicker>
        {/* Departements to display */}
        <AppSectionedPicker
          items={regions}
          uniqueKey="code"
          subKey="departments"
          displayKey="name"
          selectText=""
          searchPlaceholderText="Départements favoris"
          readOnlyHeadings={true}
          confirmText="Confirmer"
          selectedItems={selectedDepartments}
          onSelectedItemsChange={setToggledDepartements}
          onConfirm={confirmFavoriteDepartments}
          onCancel={resetTempFavoriteDepartments}
          showChips={false}
          selectedText="sélectionnés"
          label="Départements favoris"
          renderSelectText={renderSelectText}
        ></AppSectionedPicker>
        {/**Email */}
        <AppInput
          value={user.email}
          label="Adresse mail"
          onChangeText={(value) => updateField("email", value)}
        ></AppInput>
        {/* Password */}
        <AppInput
          secureTextEntry={true}
          label="Mot de passe"
          onChangeText={(value) => setPassword(value)}
        ></AppInput>
        {/* Confirmation */}
        <AppInput
          secureTextEntry={true}
          label="Confirmer le mot de passe"
          onChangeText={(value) => updatePassword(value)}
        ></AppInput>
      </Form>
      <Button block danger onPress={saveUser}>
        <Text style={{ color: "white" }}>Valider</Text>
      </Button>
    </>
  );
};

export default connect(
  mapStateToProps("clubs"),
  mapDispatchToProps
)(compose(withKeyboardAvoidingView)(SignUp));
