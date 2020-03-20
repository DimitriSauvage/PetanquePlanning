import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import Address from "../../../Models/Address";
import { ListItem } from "native-base";
import ListItemProps from "../../Props/ListItemProps";

//Props
interface AddressListItemProps extends ListItemProps<Address> {}

//Components
const AddressListItem: FunctionComponent<AddressListItemProps> = ({
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
        <Text numberOfLines={1} ellipsizeMode="clip">
          {element.getFullAddress()}
        </Text>
      </ListItem>
    )
  );
};

export default AddressListItem;
