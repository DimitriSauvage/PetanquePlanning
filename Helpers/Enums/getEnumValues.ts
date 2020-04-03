import _ from "lodash";

/**
 * Get the values in the enumeration
 * @param enumeration Enum for which get the values
 */
export default (enumeration): string[] => {
  return _.uniq(Object.keys(enumeration).filter(x => isNaN(Number(x))));
};
