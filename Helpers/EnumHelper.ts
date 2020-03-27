import _ from "lodash";

export default class EnumHelper {
  /**
   * Get the values in the enumeration
   * @param enumeration Enum for which get the values
   */
  public static getValues = (enumeration): string[] => {
    return _.uniq(Object.keys(enumeration).filter(x => isNaN(Number(x))));
  };
}
