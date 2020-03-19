import Address from "./Address";
import { Guid } from "guid-typescript";

export default class Competition {
  //#region Fields
  /**
   * Identifier
   */
  public id: Guid;
  /**
   * Address of the competition
   */
  public address: Address = new Address();
  /**
   * Name of the competition
   */
  public name: string;
  /**
   * Date of the competition
   */
  public date: Date
  /**
   * Competition description
   */
  public description: string;

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
  // public get id(): Guid {
  //   return this._id;
  // }
  // public set id(v: Guid) {
  //   this._id = v;
  // }
  //#endregion

  //#region Constructor
  /**
   * Default constructor
   */
  constructor(id?: Guid) {
    this.id = id ? id : Guid.create();
  }
  //#endregion
}
