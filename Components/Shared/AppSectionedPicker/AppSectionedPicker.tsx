import React from "react";
import { View } from "react-native";
import SectionedMultiSelect, {
  SectionedMultiSelectProps,
} from "react-native-sectioned-multi-select";
import styles, { pickerStyle } from "./Style";
import { Item, Label } from "native-base";

//Props
interface AppSectionedPickerProps<ItemType>
  extends SectionedMultiSelectProps<ItemType> {}

const AppSectionedPicker: <ItemType>(
  props: AppSectionedPickerProps<ItemType>
) => React.ReactElement<AppSectionedPickerProps<ItemType>> = (props) => {
  //Custom styles are the mixed between my style and the asked types by the user
  const customStyles = {
    ...pickerStyle,
    ...props.styles,
  };
  return (
    <Item picker inlineLabel>
      <Label>Test</Label>
      <View style={styles.container}>
        <SectionedMultiSelect
          {...props}
          styles={customStyles}
        ></SectionedMultiSelect>
      </View>
    </Item>
  );
};

export default AppSectionedPicker;
