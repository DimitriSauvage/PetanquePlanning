import { LatLng } from "react-native-maps";

export default class Address {
  //#region Fields
  /**
   * GPS Coordinate
   */
  public coordinate: LatLng;
  /**
   * House number
   */
  public number: string;
  /**
   * Street
   */
  public street: string;
  /**
   * Zip code
   */
  public zipCode: string;
  /**
   * City
   */
  public city: string;

  //#endregion

  //#region Methods
  /**
   * Get the full address
   */
  public getFullAddress = () => {
    let fullAddress = "";
    const addToAddress = valueToAdd => {
      if (valueToAdd) {
        if (fullAddress !== "") fullAddress += " ";
        fullAddress += valueToAdd;
      }
    };

    addToAddress(this.number);
    addToAddress(this.street);
    addToAddress(this.zipCode);
    addToAddress(this.city);
    return fullAddress;
  };
  //#endregion
}
