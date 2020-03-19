import Address from "./Address";

export default class Competition {
  //#region Fields
  /**
   * Address of the competition
   */
  public address: Address;
  /**
   * Name of the competition
   */
  public name: string;
  /**
   * Date of the competition
   */
  public date: Date;
  /**
   * Competition description
   */
  public description : string;
  
  
  //#endregion

  //#region Getters and setters
  // public get address(): Address {
  //   return this._address;
  // }
  // public set address(v: Address) {
  //   this._address = v;
  // }
  // public get name() : string {
  //   return this._name;
  // }
  // public set name(v : string) {
  //   this._name = v;
  // }
  // public get date() : Date {
  //   return this._date;
  // }
  // public set date(v : Date) {
  //   this._date = v;
  // }
  // public get description() : string {
  //   return this._description;
  // }
  // public set description(v : string) {
  //   this._description = v;
  // }
  //#endregion
}
