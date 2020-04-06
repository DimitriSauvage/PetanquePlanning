import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../Styles";

export default (Component) => (props) => {
  return (
    <SafeAreaView style={GlobalStyles.fullContainer} >
      <Component {...props}></Component>
    </SafeAreaView>
  );
};
