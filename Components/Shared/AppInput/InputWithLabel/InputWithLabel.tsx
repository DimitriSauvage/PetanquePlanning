import _ from "lodash";
import { Item, Label } from "native-base";
import React from "react";
import { TextInputProps } from "react-native";
import IconType from "../../../../Models/Types/IconType";
import InputWithIcon from "../InputWithIcon/InputWithIcon";

//Props
export interface InputWithLabelProps extends TextInputProps {
  /**Name of the icon to display */
  iconName?: string;
  /**Type of the icon to display */
  iconType?: IconType;
  /**Label to display */
  label?: string;
}

const InputWithLabel: (
  props: InputWithLabelProps
) => React.ReactElement<InputWithLabelProps> = ({ label, style, ...props }) => {
  //#region Fields
  /**If the label is displayed */
  const displayLabel =
    !_.isNull(label) && !_.isUndefined(label) && !_.isEmpty(label);
  //#endregion

  return (
    <Item fixedLabel={displayLabel} style={style}>
      {/**Label to display */}
      {displayLabel && <Label>{label}</Label>}

      {/**Input field */}
      <InputWithIcon {...props}></InputWithIcon>
    </Item>
  );
};

export default InputWithLabel;
