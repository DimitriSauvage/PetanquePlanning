import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Map from "../../Screens/Map/Map";
import SearchStack from "../Stack/SearchStack";
import { Text } from "native-base";

export default () => {
  /**
   * Get the icon to display for the name and the color
   * @param name Icon name
   * @param color Icon color
   */
  const getIcon = (name: string, color: string) => (
    <Text></Text>
    //<Icon name={name} size={iconSize} color={color} />
  );

  const Tab = createBottomTabNavigator();

  //Shared values for icons
  const iconSize = 18;
  const activeTintColor = "red";

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
