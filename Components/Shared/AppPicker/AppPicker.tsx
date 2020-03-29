import React from "react";
import { View } from "react-native";
import SectionedMultiSelect, {
  SectionedMultiSelectProps
} from "react-native-sectioned-multi-select";
import styles, { pickerStyle } from "./Style";

//Props
interface AppPickerProps<ItemType>
  extends SectionedMultiSelectProps<ItemType> {}

const AppPicker: <ItemType>(
  props: AppPickerProps<ItemType>
) => React.ReactElement<AppPickerProps<ItemType>> = props => {
  //Custom styles are the mixed between my style and the asked types by the user
  const customStyles = {
    ...pickerStyle,
    ...props.styles
  };
  return (
    <View style={styles.container}>
      <SectionedMultiSelect
        {...props}
        styles={customStyles}
      ></SectionedMultiSelect>
    </View>
  );
};

export default AppPicker;
