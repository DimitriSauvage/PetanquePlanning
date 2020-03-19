import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Map from "../../Screens/Map/Map";
import SearchStack from "../Stack/SearchStack";
import { Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export default () => {
  //#region Fields
  /**
   * Default icon size
   */
  const iconSize = 18;
  /**
   * Color when a tab is selected
   */
  const activeTintColor = "red";
  //#endregion
  /**
   * Get the icon to display for the name and the color
   * @param name Icon name
   * @param color Icon color
   */
  const getIcon = (name: string, color: string) => (
    <FontAwesome name={name} color={color} size={iconSize}></FontAwesome>
  );

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Carte"
      tabBarOptions={{
        tabStyle: { justifyContent: "center" },
        activeTintColor: activeTintColor
      }}
    >
      {/**Screens */}
      <Tab.Screen
        name="Carte"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => getIcon("map", color)
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Rechercher"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => getIcon("search", color)
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
