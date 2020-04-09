import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignIn from "../../Screens/SignIn/SignIn";
import SignUp from "../../Screens/SignUp/SignUp";

const UserStack = createStackNavigator();

export default () => {
  return (
    <UserStack.Navigator initialRouteName={"SignIn"}>
      {/**Sign in */}
      <UserStack.Screen
        component={SignIn}
        name="SignIn"
        options={{
          title: "Se connecter",
        }}
      ></UserStack.Screen>

      {/**Sign up */}
      <UserStack.Screen
        component={SignUp}
        name="SignUp"
        options={{
          title: "S'inscrire",
        }}
      ></UserStack.Screen>
    </UserStack.Navigator>
  );
};
