import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Map from "../../Screens/MapScreen/MapScreen";
import CompetitionsStack from "../Stack/CompetitionsStack";
import MapScreen from "../../Screens/MapScreen/MapScreen";
import SignUp from "../../Screens/SignUp/SignUp";
import UserStack from "../Stack/UserStack";

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
      initialRouteName="CompetitionsStack"
      tabBarOptions={{
        tabStyle: { justifyContent: "center" },
        activeTintColor: activeTintColor,
      }}
    >
      {/**Screens */}
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => getIcon("map", color),
          title: "Carte",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CompetitionsStack"
        component={CompetitionsStack}
        options={{
          tabBarIcon: ({ color }) => getIcon("calendar", color),
          title: "Calendrier",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="UserStack"
        component={UserStack}
        options={{
          tabBarIcon: ({ color }) => getIcon("user", color),
          title: "Connexion",
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
