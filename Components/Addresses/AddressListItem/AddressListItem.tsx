import { ListItem, Text } from "native-base";
import React, { FC } from "react";
import Address from "../../../Models/Address";
import ListItemProps from "../../Props/ListItemProps";

//Props
interface AddressListItemProps extends ListItemProps<Address> {}

//Components
const AddressListItem: FC<AddressListItemProps> = ({ element, onSelect }) => {
  return (
    element && (
      <ListItem
        key={element.id.toString()}
        onPress={(_) => {
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
