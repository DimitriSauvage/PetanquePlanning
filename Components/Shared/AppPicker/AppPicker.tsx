import { Item, Label, Picker } from "native-base";
import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import styles, { pickerStyle } from "./Style";

//Props
interface AppPickerProps extends Picker {}

const AppPicker = (props: AppPickerProps) => {
  const pickerRef = null;
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
        <Picker {...props} ref={(x) => (pickerRef = x)} />
      </Item>
    </>
  );
};

export default AppPicker;
