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
  public date: Date;
  /**
   * Hour of the competition
   */
  public hour: Date;
  /**
   * Competition description
   */
  public description: string;

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
