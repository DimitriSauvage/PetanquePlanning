import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import GlobalStyles from "../../Styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default (Component) => (props) => {
  return (
    <KeyboardAwareScrollView >
      <Component {...props}></Component>
    </KeyboardAwareScrollView>
  );
};
