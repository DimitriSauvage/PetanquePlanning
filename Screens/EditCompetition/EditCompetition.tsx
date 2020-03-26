import DateTimePicker from "@react-native-community/datetimepicker";
import _ from "lodash";
import { Form, Input, Item, Toast } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { Action } from "redux";
import Address from "../../Models/Address";
import Competition from "../../Models/Competition";
import saveCompetitionAction from "../../Store/Actions/Creators/competition.action";
import SearchAddress from "../SearchAddress/SearchAddress";
import styles from "./Style";
import moment from "moment";
import DateHelper from "../../Helpers/DateHelper";

interface EditCompetitionProps {
  route: any;
  navigation: any;
  dispatch: (action: Action) => void;
}

const EditCompetition: FunctionComponent<EditCompetitionProps> = ({
  route,
  navigation,
  dispatch
}) => {
  //#region State
  /**
   * Competition to edit
   */
  const [competition, setCompetition] = useState(
    (route?.params?.competition
      ? route.params.competition
      : new Competition()) as Competition
  );
  /**
   * Display or not the date picker
   */
  const [showDatePicker, setShowDatePicker] = useState(false);
  /**
   * Display or not the time picker
   */
  const [showTimePicker, setShowTimePicker] = useState(false);
  //#endregion

  //#region Methods
  /**
   * Update the address
   * @param address Address to keep
   */
  const updateAddress = (address: Address) => {
    updateField("address", address);
  };

  /**
   * Update the dateof the competition
   * @param dateTime Date
   */
  const updateDate = (date: Date) => {
    //Update competition
    updateField("date", date);
    setShowDatePicker(false);
  };

  /**
   * Update the hour of the competition
   * @param hour Date
   */
  const updateHour = (hour: Date) => {
    //Update competition
    updateField("hour", hour);
    setShowTimePicker(false);
  };

  /**
   * Update a field of the competition object
   * @param field Field to update
   * @param value Value to set
   */
  const updateField = (field: string, value: any) => {
    const newCompetition: Competition = {
      ...competition
    };
    newCompetition[_.camelCase(field)] = value;
    setCompetition(newCompetition);
  };

  /**
   * Save the competition
   */
  const saveCompetition = () => {
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
    dispatch(saveCompetitionAction(competition));
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
      {/**Competition name */}
      <Item>
        <Input
          autoFocus={!competition?.name || competition?.name === ""}
          placeholder="Nom du concours"
          onChangeText={value => updateField("name", value)}
        ></Input>
      </Item>
      {/**Competition address */}
      <Item>
        <Input
          placeholder="Adresse"
          style={styles.input}
          value={
            competition?.address ? competition.address.getFullAddress() : ""
          }
          onTouchStart={() => {
            //Go to search address
            navigation.navigate(SearchAddress.name, {
              onGoBack: updateAddress
            });
          }}
        ></Input>
      </Item>
      {/**Competition date*/}
      <Item>
        <Input
          placeholder="Date"
          onTouchStart={() => setShowDatePicker(true)}
          value={competition?.date ? moment(competition.date).format("L") : ""}
        ></Input>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={competition?.date ? competition.date : getDefaultDateTime()}
            display="calendar"
            onChange={(event, date) => updateDate(date)}
            minimumDate={new Date()}
          />
        )}
      </Item>
      {/**Competition hour*/}
      <Item>
        <Input
          placeholder="Heure"
          onTouchStart={() => setShowTimePicker(true)}
          value={competition?.hour ? moment(competition.hour).format("LT") : ""}
        ></Input>
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            value={competition?.hour ? competition.hour : getDefaultDateTime()}
            display="clock"
            onChange={(event, date) => updateHour(date)}
            minimumDate={new Date()}
          />
        )}
      </Item>
      {/**Competition description */}
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
        <Button title="Enregistrer" onPress={saveCompetition}></Button>
      </View>
    </Form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action)
  };
};

export default connect(null, mapDispatchToProps)(EditCompetition);
