import axios, { AxiosInstance } from "axios";

/**
 * Address repository
 */
export default abstract class Repository {
  //#region Fields
  /**
   * Http requests manager
   */
  public httpClient: AxiosInstance = axios.create();
  //#endregion

  //#region Constructor
  //#endregion

  //#region Getter and setters
  // protected get httpClient() {
  //   return this._httpClient;
  // }
  //#endregion

  //#region Methods
  //#endregion
}
