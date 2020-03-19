import { LatLng } from "react-native-maps";

export default class Address {
  //#region Fields

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

  //#region Getters and setters
  // public get longitude(): number {
  //   return this._longitude;
  // }
  // public set longitude(v: number) {
  //   this._longitude = v;
  // }
  // public get latitude(): number {
  //   return this._latitude;
  // }
  // public set latitude(v: number) {
  //   this._latitude = v;
  // }
  // public get city(): string {
  //   return this._city;
  // }
  // public set city(v: string) {
  //   this._city = v;
  // }
  // public get zipCode(): string {
  //   return this._zipCode;
  // }
  // public set zipCode(v: string) {
  //   this._zipCode = v;
  // }
  // public get street(): string {
  //   return this._street;
  // }
  // public set street(v: string) {
  //   this._street = v;
  // }
  // public get number(): string {
  //   return this._number;
  // }
  // public set number(v: string) {
  //   this._number = v;
  // }

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
