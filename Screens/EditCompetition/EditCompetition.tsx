import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Button, Form, Input, Item, Toast, View, Text } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import getNextDateOfDay from "../../Helpers/Date/getNextDateOfDay";
import updateFormField from "../../Helpers/Form/updateFormField";
import { editCompetitionAction } from "../../Store/Actions/Creators/competitionActions.creator";
import mapDispatchToProps from "../../Store/mapDispatchToProps";
import SearchAddress from "../SearchAddress/SearchAddress";
import styles from "./Style";
import { CompetitionDTO, Address } from "../../Models/generated";

interface EditCompetitionProps {
  route: any;
  navigation: any;
  dispatch: (action: Action) => void;
}

const EditCompetition: FunctionComponent<EditCompetitionProps> = ({
  route,
  navigation,
  dispatch,
}) => {
  //#region State
  /**
   * Competition to edit
   */
  const [competition, setCompetition] = useState(
    (route?.params?.competition
      ? route.params.competition
      : new CompetitionDTO()) as CompetitionDTO
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
  const updateField = <TField extends any>(field: string, value: TField) => {
    updateFormField<CompetitionDTO, TField>(
      competition,
      field,
      value,
      setCompetition
    );
  };

  /**
   * Save the competition
   */
  const saveCompetition = () => {
    try {
      dispatch(editCompetitionAction(competition));
      Toast.show({
        text: "Concours sauvegardé",
        type: "success",
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        text: "Erreur lors de l'enregistrement",
        type: "danger",
      });
    }
  };

  /**
   * Get the default date time to display
   */
  const getDefaultDateTime = () => {
    const date = getNextDateOfDay(6);
    date.setHours(14, 0, 0);
    return date;
  };
  //#endregion

  return (
    <Form>
      {/**Competition name */}
      <Item>
        <Input
          autoFocus={!competition?.Name || competition?.Name === ""}
          placeholder="Nom du concours"
          onChangeText={(value) => updateField("name", value)}
        ></Input>
      </Item>
      {/**Competition address */}
      <Item>
        <Input
          placeholder="Adresse"
          style={styles.input}
          value={competition?.Address ? competition.Address.FullAddress : ""}
          onTouchStart={() => {
            //Go to search address
            navigation.navigate(SearchAddress.name, {
              onGoBack: updateAddress,
            });
          }}
        ></Input>
      </Item>
      {/**Competition date*/}
      <Item>
        <Input
          placeholder="Date"
          onTouchStart={() => setShowDatePicker(true)}
          value={competition?.Date ? moment(competition.Date).format("L") : ""}
        ></Input>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={competition?.Date ? competition.Date : getDefaultDateTime()}
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
          value={competition?.Date ? moment(competition.Date).format("LT") : ""}
        ></Input>
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            value={competition?.Date ? competition.Date : getDefaultDateTime()}
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
          onChangeText={(value) => updateField("description", value)}
        ></Input>
      </Item>

      {/**Save button */}
      <View style={styles.saveButton}>
        <Button onPress={saveCompetition}>
          <Text>Enregistrer</Text>
        </Button>
      </View>
    </Form>
  );
};
export default connect(null, mapDispatchToProps)(EditCompetition);
