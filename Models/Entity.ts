import { Guid } from "guid-typescript";
export default abstract class Entity {
  //#region Fields
  /**
   * Identifier
   */
  private _id: string = Guid.create().toString();

  //#endregion

  //#region Getters and setters
  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }
  //#endregion
}
