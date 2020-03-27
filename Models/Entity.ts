import { Guid } from "guid-typescript";

export default abstract class Entity {
  //#region Fields
  /**
   * Identifier
   */
  public id: string = Guid.create().toString();

  //#endregion
}
