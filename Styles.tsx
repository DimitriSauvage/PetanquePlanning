import { StyleSheet } from "react-native";

const flexSpace: number = 10;

const GlobalStyles = StyleSheet.create({
  flexContainer: {
    paddingLeft: -flexSpace
  },
  flexItem: {
    paddingLeft: flexSpace
  }
});

export default GlobalStyles;
