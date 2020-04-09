import { Picker } from "native-base";
import React from "react";
import PickerWithLabel, {
  PickerWithLabelProps,
} from "./AppPickerWithLabel/PickerWithLabel";

//Props
interface AppPickerProps extends PickerWithLabelProps {}

const AppPicker = (props: AppPickerProps) => {
  return <PickerWithLabel {...props}></PickerWithLabel>;
};

export default AppPicker;
