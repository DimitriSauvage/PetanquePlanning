import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";
import Address from "../../../Models/Address";
import AddressListItem from "../AddressListItem/AddressListItem";
import styles from "./Style";
import { List, Toast } from "native-base";
import ListProps from "../../Props/ListProps";

//Props
interface AddressListProps extends ListProps<Address> {}

//Components
const AddressList: FunctionComponent<AddressListProps> = ({
  elements,
  onSelect
}) => {
  return (
    elements?.length > 0 && (
      <List>
        {elements.map(address => (
          <AddressListItem
            key={address.id.toString()}
            element={address}
            onSelect={address => (onSelect ? onSelect(address) : undefined)}
          ></AddressListItem>
        ))}
      </List>
    )
  );
};

export default AddressList;
