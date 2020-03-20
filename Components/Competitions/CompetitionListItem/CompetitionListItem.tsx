import moment from "moment";
import { Body, ListItem, Right } from "native-base";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import Competition from "../../../Models/Competition";
import ListItemProps from "../../Props/ListItemProps";

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
        onPress={_ => {
          if (onSelect) onSelect(element);
        }}
      >
        <Body>
          <Text>{element.name}</Text>
          <Text>
            {element.address
              ? element.address.getFullAddress()
              : element.description}
          </Text>
        </Body>
        <Right>
          <Text>
            {element.date
              ? moment(element.date).format("dddd DD/MM")
              : "Date inconnue"}
          </Text>
          <Text>
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
