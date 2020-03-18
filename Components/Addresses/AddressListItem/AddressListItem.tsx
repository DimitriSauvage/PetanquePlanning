import { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import Address from "../../../Models/Address";

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
      <TouchableOpacity
        onPress={event => {
          if (selectItem) selectItem(address);
        }}
      >
        <Text>{address.getFullAddress()}</Text>
      </TouchableOpacity>
    )
  );
};

export default AddressListItem;
