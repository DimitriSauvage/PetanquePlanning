import DateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import moment from "moment";
import { Form, Input, Item, Toast } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { Action } from "redux";
import DateHelper from "../../Helpers/DateHelper";
import Address from "../../Models/Address";
import User from "../../Models/Users/User";
import SearchAddress from "../SearchAddress/SearchAddress";
import styles from "./Style";

interface SignUpProps {
  route: any;
  navigation: any;
  dispatch: (action: Action) => void;
}

const SignUp: FunctionComponent<SignUpProps> = ({
  route,
  navigation,
  dispatch
}) => {
  //#region State
  /**
   * User to edit
   */
  const [user, setUser] = useState(
    (route?.params?.user ? route.params.user : new User()) as User
  );
  //#endregion

  //#region Methods

  /**
   * Update a field of the user object
   * @param field Field to update
   * @param value Value to set
   */
  const updateField = (field: string, value: any) => {
    const newUser: User = {
      ...user
    };
    newUser[_.camelCase(field)] = value;
    setUser(newUser);
  };

  /**
   * Save the user
   */
  const saveUser = () => {
    try {
      Toast.show({
        text: "Concours sauvegardé",
        type: "success"
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        text: "Erreur lors de l'enregistrement",
        type: "danger"
      });
    }
    dispatch(saveUserAction(user));
  };

  /**
   * Get the default date time to display
   */
  const getDefaultDateTime = () => {
    const date = DateHelper.getNextDateOfDay(6);
    date.setHours(14, 0, 0);
    return date;
  };
  //#endregion

  return (
    <Form>
      {/**User name */}
      <Item>
        <Input
          autoFocus={!user?.name || user?.name === ""}
          placeholder="Nom du concours"
          onChangeText={value => updateField("name", value)}
        ></Input>
      </Item>
      {/**User address */}
      <Item>
        <Input
          placeholder="Adresse"
          style={styles.input}
          value={
            user?.address ? user.address.getFullAddress() : ""
          }
          onTouchStart={() => {
            //Go to search address
            navigation.navigate(SearchAddress.name, {
              onGoBack: updateAddress
            });
          }}
        ></Input>
      </Item>
      {/**User date*/}
      <Item>
        <Input
          placeholder="Date"
          onTouchStart={() => setShowDatePicker(true)}
          value={user?.date ? moment(user.date).format("L") : ""}
        ></Input>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={user?.date ? user.date : getDefaultDateTime()}
            display="calendar"
            onChange={(event, date) => updateDate(date)}
            minimumDate={new Date()}
          />
        )}
      </Item>
      {/**User hour*/}
      <Item>
        <Input
          placeholder="Heure"
          onTouchStart={() => setShowTimePicker(true)}
          value={user?.hour ? moment(user.hour).format("LT") : ""}
        ></Input>
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            value={user?.hour ? user.hour : getDefaultDateTime()}
            display="clock"
            onChange={(event, date) => updateHour(date)}
            minimumDate={new Date()}
          />
        )}
      </Item>
      {/**User description */}
      <Item>
        <Input
          placeholder="Decription"
          multiline={true}
          numberOfLines={2}
          onChangeText={value => updateField("description", value)}
        ></Input>
      </Item>

      {/**Save button */}
      <View style={styles.saveButton}>
        <Button title="Enregistrer" onPress={saveUser}></Button>
      </View>
    </Form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action)
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
