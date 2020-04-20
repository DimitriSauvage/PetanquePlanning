import moment from "moment";
import { Body, ListItem, Right, View, Text } from "native-base";
import React, { FunctionComponent } from "react";
import ListItemProps from "../../Props/ListItemProps";
import styles from "./Style";
import _ from "lodash";
import { CompetitionDTO } from "../../../Models/generated";

//Props
interface CompetitionListItemProps extends ListItemProps<CompetitionDTO> {}

//Components
const CompetitionListItem: FunctionComponent<CompetitionListItemProps> = ({
  element,
  onSelect,
}) => {
  return (
    element && (
      <ListItem
        key={element.Id.toString()}
        onPress={() => {
          if (onSelect) onSelect(element);
        }}
      >
        <Body>
          {/**Affichage de l'adresse */}
          <Text style={styles.title}>{element.Name}</Text>
          {element.Address && (
            <View>
              <Text>
                {element.Address.Number}&nbsp;{element.Address.Street}
              </Text>
              <Text>
                {element.Address.ZipCode}&nbsp;{element.Address.City}
              </Text>
            </View>
          )}
        </Body>
        <Right style={styles.datetimeContainer}>
          <Text style={styles.datetime}>
            {element.Date
              ? _.upperFirst(moment(element.Date).format("DD/MM"))
              : "Date inconnue"}
          </Text>
          <Text style={styles.datetime}>
            {element.Date
              ? moment(element.Date).format("HH:mm")
              : "Heure inconnue"}
          </Text>
        </Right>
      </ListItem>
    )
  );
};

export default CompetitionListItem;
