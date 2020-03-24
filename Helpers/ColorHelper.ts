import HashHelper from "./HashHelper";

export default class ColorHelper {
  //#region Public methods
  /**
   * Get an hexa color from a string
   */
  public static getColorFromString = (val: string): string => {
    return ColorHelper.getHexaFromInt(HashHelper.getHash(val));
  };

  /**
   * Get an hexa color from an int
   */
  public static getHexaFromInt = (int: number) => {
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (int >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };
  //#endregion
}
