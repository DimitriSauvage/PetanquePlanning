import moment from "moment";
import { Body, ListItem, Right, View } from "native-base";
import React, { FunctionComponent } from "react";
import Competition from "../../../Models/Competition";
import ListItemProps from "../../Props/ListItemProps";
import styles from "./Style";
import * as _ from "lodash";
import { Text } from "react-native";

//Props
interface CompetitionListItemProps extends ListItemProps<Competition> {}

//Components
const CompetitionListItem: FunctionComponent<CompetitionListItemProps> = ({
  element,
  onSelect
}) => {
  return (
    element && (
      <ListItem
        key={element.id.toString()}
        onPress={() => {
          if (onSelect) onSelect(element);
        }}
      >
        <Body>
          {/**Affichage de l'adresse */}
          <Text style={styles.title}>{element.name}</Text>
          {element.address && (
            <View>
              <Text>
                {element.address.number}&nbsp;{element.address.street}
              </Text>
              <Text>
                {element.address.zipCode}&nbsp;{element.address.city}
              </Text>
            </View>
          )}
        </Body>
        <Right style={styles.datetimeContainer}>
          <Text style={styles.datetime}>
            {element.date
              ? _.upperFirst(moment(element.date).format("DD/MM"))
              : "Date inconnue"}
          </Text>
          <Text style={styles.datetime}>
            {element.hour
              ? moment(element.hour).format("HH:mm")
              : "Heure inconnue"}
          </Text>
        </Right>
      </ListItem>
    )
  );
};

export default CompetitionListItem;
