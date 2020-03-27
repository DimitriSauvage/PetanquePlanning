import Region from "./Region";

export default class Departement {
  //#region Fields
  /**
   * Name
   */
  public name: string;
  /**
   * Code
   */
  public code: string;
  /**
   * Region code
   */
  public regionCode: string;
  /**
   * Region
   */
  public region: Region;
  /**
   * Code of adjacent departements
   */
  public adjacentDepartements: string[];
  //#endregion
}
