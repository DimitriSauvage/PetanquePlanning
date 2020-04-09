import { Icon } from "native-base";
import React from "react";
import { TextInputProps } from "react-native";
import IconType from "../../../../Models/Types/IconType";
import CustomInput from "../Input/CustomInput";

//Props
export interface InputWithIconProps extends TextInputProps {
  /**Name of the icon to display */
  iconName?: string;
  /**Type of the icon to display */
  iconType?: IconType;
}

const InputWithIcon: (
  props: InputWithIconProps
) => React.ReactElement<InputWithIconProps> = ({
  iconName,
  iconType,
  ...props
}) => {
  return (
    <>
      {iconName && iconType && <Icon active name={iconName} type={iconType} />}
      <CustomInput {...props}></CustomInput>
    </>
  );
};

export default InputWithIcon;
