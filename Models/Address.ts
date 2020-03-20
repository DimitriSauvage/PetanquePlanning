import { LatLng } from "react-native-maps";
import { Guid } from "guid-typescript";

export default class Address {
  //#region Fields
  /**
   * Identifier
   */
  public id: Guid;
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

  //#region Constructor
  /**
   * Default constructor
   */
  constructor(id?: Guid) {
    this.id = id ? id : Guid.create();
  }
  //#endregion

  //#region Methods
  /**
   * Get the full address
   */
  public getFullAddress = () => {
    let fullAddress = "";
    if (this.number) fullAddress += this.number + " ";
    if (this.street) fullAddress += this.street + " ";
    if (this.zipCode) fullAddress += this.zipCode + " ";
    if (this.city) fullAddress += this.city;
    return fullAddress;
  };
  //#endregion
}
