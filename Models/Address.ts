import { LatLng } from "react-native-maps";

export default class Address {
  //#region Fields
  /**
   * GPS Coordinate
   */
  private _coordinate: LatLng;
  /**
   * House number
   */
  private _number: string;
  /**
   * Street
   */
  private _street: string;
  /**
   * Zip code
   */
  private _zipCode: string;
  /**
   * City
   */
  private _city: string;

  //#endregion

  //#region Getters and setters
  public get coordinate(): LatLng {
    return this._coordinate;
  }
  public set coordinate(v: LatLng) {
    this._coordinate = v;
  }
  public get number(): string {
    return this._number;
  }
  public set number(v: string) {
    this._number = v;
  }
  public get street(): string {
    return this._street;
  }
  public set street(v: string) {
    this._street = v;
  }
  public get zipCode(): string {
    return this._zipCode;
  }
  public set zipCode(v: string) {
    this._zipCode = v;
  }
  public get city(): string {
    return this._city;
  }
  public set city(v: string) {
    this._city = v;
  }
  //#endregion

  //#region Constructor
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
