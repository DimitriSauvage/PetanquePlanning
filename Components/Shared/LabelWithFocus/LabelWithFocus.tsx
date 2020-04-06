import { Label } from "native-base";
import React, { MutableRefObject } from "react";
import { TouchableWithoutFeedback } from "react-native";

//Props
interface LabelWithFocusProps {
  label: string;
  ref: MutableRefObject<any>;
}

const LabelWithFocus: (
  props: LabelWithFocusProps
) => React.ReactElement<LabelWithFocusProps> = (props) => {
  /**
   * Set the focus on the referenced element
   */
  const setFocus = () => {
    if (props.ref) {
      if (props.ref?.current?.focus) {
        props.ref.current.focus();
      } else if (props.ref?.current?.wrappedInstance?.focus) {
        props.ref?.current?.wrappedInstance?.focus();
      }
      props.ref.current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPressOut={() => {
        setFocus();
      }}
    >
      <Label>{props.label}</Label>
    </TouchableWithoutFeedback>
  );
};

export default LabelWithFocus;
