import _ from "lodash";
import { Form, Input, Item } from "native-base";
import React, { FunctionComponent, useState } from "react";
import Address from "../../Models/Address";
import Competition from "../../Models/Competition";
import SearchAddress from "../SearchAddress/SearchAddress";
import styles from "./Style";

interface EditCompetitionProps {
  route: any;
  navigation: any;
  competition?: Competition;
}

const EditCompetition: FunctionComponent<EditCompetitionProps> = ({
  route,
  navigation
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
   * Update a field of the competition object
   * @param field Field to update
   * @param value Value to set
   */
  const updateField = (field: string, value: any) => {
    const newCompetition = {
      ...competition
    };
    newCompetition[_.camelCase(field)] = value;
    setCompetition(newCompetition);
  };
  //#endregion

  return (
    <Form>
      {/**Competition name */}
      <Item>
        <Input
          autoFocus={false}
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
      {/**Competition */}
      <Item>
        {/* <DateTimePicker
          mode="date"
          minimumDate={new Date()}
          value={competition?.date ? competition.date : new Date()}
          locale={Localization.locale}
          onChange={(event, date) => updateField("date", date)}
        ></DateTimePicker> */}

        {/* <DatePicker
          animationType="fade"
          minimumDate={new Date()}
          locale={Localization.locale}
          placeHolderText={
            competition?.date
              ? competition.date.toLocaleDateString()
              : "Date de la compétition"
          }
          formatChosenDate={moment.localeData().longDateFormat("L")}
          onDateChange={date => updateField("date", date)}
        ></DatePicker> */}
      </Item>
    </Form>
  );
};

export default EditCompetition;
