import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../Screens/Search/Search";
import EditCompetition from "../../Screens/EditCompetition/EditCompetition";
import SearchAddress from "../../Screens/SearchAddress/SearchAddress";

const SearchStack = createStackNavigator();

export default () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        component={EditCompetition}
        name="EditCompetition"
      ></SearchStack.Screen>
      <SearchStack.Screen component={Search} name="Search"></SearchStack.Screen>
      <SearchStack.Screen
        component={SearchAddress}
        name="SearchAddress"
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};
