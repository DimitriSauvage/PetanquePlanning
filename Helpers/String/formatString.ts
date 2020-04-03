import _ from "lodash";

/**
 * Format a string
 * @param value Value to format
 * @param upperCase Set to uppercase
 * @param removeSpecialCharacters Remove the specials characters
 */
export default (
  value: string,
  upperCase: boolean = false,
  removeSpecialCharacters: boolean = false
) => {
  let result = value;
  if (upperCase) result = result.toUpperCase();
  if (removeSpecialCharacters) result = _.deburr(result);

  return result;
};
