import { Item, Label, Picker, NativeBase } from "native-base";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import IconType from "../../../../Models/Types/IconType";

//Props
export interface PickerWithLabelProps extends NativeBase.Picker {
  /**Name of the icon to display */
  iconName?: string;
  /**Type of the icon to display */
  iconType?: IconType;
  /**Label to display */
  label: string;
  /**Children */
  children: any;
}

const PickerWithLabel: (
  props: PickerWithLabelProps
) => React.ReactElement<PickerWithLabelProps> = ({
  iconName,
  iconType,
  label,
  ...props
}) => {
  /**Ref to the input */
  let pickerRef: any;
  return (
    <>
      <Item fixedLabel>
        {/**Label to display */}
        <TouchableWithoutFeedback
          onPressOut={() => {
            pickerRef.wrappedInstance.focus();
          }}
        >
          <Label>{label}</Label>
        </TouchableWithoutFeedback>

        {/**Input field */}
        <Picker {...props} ref={(x) => (pickerRef = x)}>
          {props.children}
        </Picker>
      </Item>
    </>
  );
};

export default PickerWithLabel;
