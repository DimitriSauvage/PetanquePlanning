import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import Address from "../../../Models/Address";
import { ListItem } from "native-base";

//Props
interface AddressListItemProps {
  /**
   * Address to display
   */
  address: Address;
  /**
   * Function the item is selected
   */
  selectItem?: Function;
}

//Components
const AddressListItem: FunctionComponent<AddressListItemProps> = ({
  address,
  selectItem
}) => {
  return (
    address && (
      <ListItem
        key={address.id.toString()}
        onPress={event => {
          if (selectItem) selectItem(address);
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="clip">
          {address.getFullAddress()}
        </Text>
      </ListItem>
    )
  );
};

export default AddressListItem;
