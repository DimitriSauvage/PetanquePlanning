import Address from "./Address";
import Entity from "./Entity";

export default class Club extends Entity{
  //#region Fields
  /**
   * Name
   */
  private _name: string;
  /**
   * Short name
   */
  private _shortName: string;
  /**
   * Address
   */
  private _address: Address;
  //#endregion

  //#region Getters and setters
  public get address(): Address {
    return this._address;
  }
  public set address(v: Address) {
    this._address = v;
  }
  public get shortName(): string {
    return this._shortName;
  }
  public set shortName(v: string) {
    this._shortName = v;
  }
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  //#endregion

}
