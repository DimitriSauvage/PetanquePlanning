import { List } from "native-base";
import React, { FunctionComponent } from "react";
import { Address } from "../../../Models/generated";
import ListProps from "../../Props/ListProps";
import AddressListItem from "../AddressListItem/AddressListItem";

//Props
interface AddressListProps extends ListProps<Address> {}

//Components
const AddressList: FunctionComponent<AddressListProps> = ({
  elements,
  onSelect,
}) => {
  return (
    elements?.length > 0 && (
      <List>
        {elements.map((address) => (
          <AddressListItem
            key={address.FullAddress}
            element={address}
            onSelect={(address) => (onSelect ? onSelect(address) : undefined)}
          ></AddressListItem>
        ))}
      </List>
    )
  );
};

export default AddressList;
