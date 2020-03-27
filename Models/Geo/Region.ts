import Departement from "./Departments";

export default class Region {
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
   * Department codes
   */
  public departmentCodes: string[];
  /**
   * Departments of the region
   */
  public departments: Departement[];
  //#endregion
}
