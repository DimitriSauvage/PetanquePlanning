import { View } from "native-base";
import React, { FC } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default (Component: FC) => (props) => {
  return props.ongoing ? (
    <View style={style.container}>
      <ActivityIndicator color="red" size="large"></ActivityIndicator>
    </View>
  ) : (
    <Component {...props} />
  );
};
