import { View } from "native-base";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default (Component) => (props) => {
  return props.ongoing ? (
    <View style={style.container}>
      <ActivityIndicator color="red" size="large"></ActivityIndicator>
    </View>
  ) : (
    <Component {...props} />
  );
};
