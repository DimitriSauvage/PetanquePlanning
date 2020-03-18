import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./TabBar/TabNavigator";

export default () => {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
};
