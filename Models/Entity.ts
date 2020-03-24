export default abstract class Entity {
  //#region Fields
  /**
   * Identifier
   */
  private _id: string;

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
