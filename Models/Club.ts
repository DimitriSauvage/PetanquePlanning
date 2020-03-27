import Address from "./Address";
import Entity from "./Entity";

export default class Club extends Entity {
  //#region Fields
  /**
   * Name
   */
  public name: string;
  /**
   * Short name
   */
  public shortName: string;
  /**
   * Address
   */
  public address: Address;
  //#endregion
}
