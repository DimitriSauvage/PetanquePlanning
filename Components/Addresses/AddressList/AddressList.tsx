import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";
import Address from "../../../Models/Address";
import AddressListItem from "../AddressListItem/AddressListItem";
import styles from "./Style";

//Props
interface AddressListProps {
  /**
   * Addresses to display
   */
  addresses: Address[];
  /**
   * Function to apply when an item is selected
   */
  onSelect?: Function;
}

//Components
const AddressList: FunctionComponent<AddressListProps> = ({
  addresses,
  onSelect
}) => {
  const selectItem = address => {
    if (onSelect) onSelect(address);
  };

  return (
    addresses?.length > 0 && (
      <FlatList
        style={styles.list}
        data={addresses}
        renderItem={address => (
          <AddressListItem
            address={address.item}
            selectItem={selectItem}
          ></AddressListItem>
        )}
      ></FlatList>
    )
  );
};

export default AddressList;
