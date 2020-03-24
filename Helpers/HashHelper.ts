export default class HashHelper {
  //#region Public methods
  /**
   * Get a hash from a string
   */
  public static getHash = (value: string) => {
    // java String#hashCode
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };
  //#endregion
}
