import { Input } from "native-base";
import React from "react";
import { TextInputProps } from "react-native";

//Props
export interface InputProps extends TextInputProps {}

const CustomInput: (props: InputProps) => React.ReactElement<InputProps> = (
  props
) => {
  return <Input {...props} />;
};

export default CustomInput;
