import { StyleSheet } from "react-native";

const flexSpace: number = 10;

const GlobalStyles = StyleSheet.create({
  flexContainer: {
    paddingLeft: -flexSpace,
  },
  flexItem: {
    paddingLeft: flexSpace,
  },
  fullContainer: {
    flex: 1,
  },
});

export default GlobalStyles;
