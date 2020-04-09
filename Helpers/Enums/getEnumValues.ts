import _ from "lodash";

/**
 * Get the values in the enumeration
 * @param enumeration Enum for which get the values
 */
export default (enumeration): string[] => {
  let values: Array<any> = Object.values(enumeration).filter((x) =>
    isNaN(Number(x))
  );
  if (values.length === 0) {
    values = Object.keys(enumeration);
  }
  return _.uniq(values);
};
