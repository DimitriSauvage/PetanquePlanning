import _ from "lodash";

export default <TObject extends object, TValue>(
  object: TObject,
  field: string,
  value: TValue,
  setFieldInState?: (value: TObject) => void
) => {
  //Set the value in the object
  const newValue: TObject = {
    ...object
  };
  newValue[_.camelCase(field)] = value;

  //Update the field in the state if asked
  if (setFieldInState) {
    setFieldInState(newValue);
  }
};
