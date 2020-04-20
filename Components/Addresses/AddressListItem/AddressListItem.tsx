import { ListItem, Text } from "native-base";
import React, { FC } from "react";
import { Address } from "../../../Models/generated";
import ListItemProps from "../../Props/ListItemProps";

//Props
interface AddressListItemProps extends ListItemProps<Address> {}

//Components
const AddressListItem: FC<AddressListItemProps> = ({ element, onSelect }) => {
  return (
    element && (
      <ListItem
        key={element.FullAddress}
        onPress={(_) => {
          if (onSelect) onSelect(element);
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="clip">
          {element.FullAddress}
        </Text>
      </ListItem>
    )
  );
};

export default AddressListItem;
