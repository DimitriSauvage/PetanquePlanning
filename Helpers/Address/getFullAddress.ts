import { Address } from "../../Models/generated";

/**
 * Get the full address
 * @param address Address for which get the full address
 */
export default (address: Address) => {
  let fullAddress = "";
  const addToAddress = (valueToAdd) => {
    if (valueToAdd) {
      if (fullAddress !== "") fullAddress += " ";
      fullAddress += valueToAdd;
    }
  };

  addToAddress(address.Number);
  addToAddress(address.Street);
  addToAddress(address.ZipCode);
  addToAddress(address.City);
  return fullAddress;
};
