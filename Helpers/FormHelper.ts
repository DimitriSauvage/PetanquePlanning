import _ from "lodash";

export default class FormHelper {
  /**
   * Update a field in an object in a firm
   * @param object Object to update
   * @param field Field to update
   * @param value Value to set
   * @param setFieldInState Method to update the state if asked
   */
  public static updateField = <T extends object>(
    object: T,
    field: string,
    value: any,
    setFieldInState?: (value: T) => void
  ) => {
    //Set the value in the object
    const newValue: T = {
      ...object
    };
    newValue[_.camelCase(field)] = value;

    //Update the field in the state if asked
    if (setFieldInState) {
      setFieldInState(newValue);
    }
  };
}
