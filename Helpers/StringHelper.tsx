import _ from "lodash";

export default class StringHelper {
  //#region Constants
  /**
   * Add a carriage return in a string
   */
  public static readonly CARRIAGE_RETURN = "\n";
  //#endregion

  //#region Methods
  public static format = (
    value: string,
    upperCase: boolean = false,
    removeSpecialCharacters: boolean = false
  ) => {
    let result = value;
    if (upperCase) result = result.toUpperCase();
    if (removeSpecialCharacters) result = _.deburr(result);

    return result;
  };
  //#endregion
}
