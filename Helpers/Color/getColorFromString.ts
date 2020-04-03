import getColorHexaFromInt from "./getColorHexaFromInt";
import getStringHash from "../Hash/getStringHash";

/**
 * Get a color from a string
 */
export default (val: string): string => {
  return getColorHexaFromInt(getStringHash(val));
};
