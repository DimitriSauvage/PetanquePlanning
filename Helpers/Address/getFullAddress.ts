import Address from "../../Models/Address";

/**
 * Get the full address
 * @param address Address for which get the full address
 */
export default (address: Address) => {
  let fullAddress = "";
  const addToAddress = valueToAdd => {
    if (valueToAdd) {
      if (fullAddress !== "") fullAddress += " ";
      fullAddress += valueToAdd;
    }
  };

  addToAddress(address.number);
  addToAddress(address.street);
  addToAddress(address.zipCode);
  addToAddress(address.city);
  return fullAddress;
};
