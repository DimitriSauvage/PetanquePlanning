import { Input, Item, Label } from "native-base";
import React from "react";
import { TextInputProps } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import IconType from "../../../../Models/Types/IconType";

//Props
export interface InputWithLabelProps extends TextInputProps {
  /**Name of the icon to display */
  iconName?: string;
  /**Type of the icon to display */
  iconType?: IconType;
  /**Label to display */
  label: string;
}

const InputWithLabel: (
  props: InputWithLabelProps
) => React.ReactElement<InputWithLabelProps> = ({
  iconName,
  iconType,
  label,
  ...props
}) => {
  /**Ref to the input */
  let inputRef: any;
  return (
    <>
      <Item>
        {/**Label to display */}
        <TouchableWithoutFeedback
          onPressOut={() => {
            inputRef.wrappedInstance.focus();
          }}
        >
          <Label>{label}</Label>
        </TouchableWithoutFeedback>

        {/**Input field */}
        <Input {...props} ref={(x) => (inputRef = x)} />
      </Item>
    </>
  );
};

export default InputWithLabel;
