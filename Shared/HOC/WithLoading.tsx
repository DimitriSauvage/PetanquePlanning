import { View } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native";

export interface WithLoadingProps {
  ongoing: boolean;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default (Component) => (props: WithLoadingProps) => {
  return props.ongoing ? (
    <View style={style.container}>
      <Text>Traitement en cours...</Text>
    </View>
  ) : (
    <Component {...props} />
  );
};
