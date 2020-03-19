import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../Screens/Search/Search";
import EditCompetition from "../../Screens/EditCompetition/EditCompetition";
import SearchAddress from "../../Screens/SearchAddress/SearchAddress";

const SearchStack = createStackNavigator();

export default () => {
  return (
    <SearchStack.Navigator initialRouteName={EditCompetition.name}>
      <SearchStack.Screen
        component={EditCompetition}
        name={EditCompetition.name}
        options={{
          title: "Modification de la compétition"
        }}
      ></SearchStack.Screen>
      <SearchStack.Screen
        component={Search}
        name={Search.name}
        options={{
          title: "Rechercher une compétition"
        }}
      ></SearchStack.Screen>
      <SearchStack.Screen
        component={SearchAddress}
        name={SearchAddress.name}
        options={{
          title: "Rechercher une adresse"
        }}
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};
