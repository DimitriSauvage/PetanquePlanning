import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditCompetition from "../../Screens/EditCompetition/EditCompetition";
import SearchAddress from "../../Screens/SearchAddress/SearchAddress";
import Competitions from "../../Screens/Competitions/Competitions";
import CompetitionsCalendar from "../../Screens/CompetitionsCalendar/CompetitionsCalendar";
import CompetitionDetails from "../../Screens/CompetitionDetails/CompetitionDetails";

const CompetitionStack = createStackNavigator();

export default () => {
  return (
    <CompetitionStack.Navigator initialRouteName={"CompetionsCalendar"}>
      {/**Competition calendar */}
      <CompetitionStack.Screen
        component={CompetitionsCalendar}
        name="CompetionsCalendar"
        options={{
          title: "Calendrier des concours"
        }}
      ></CompetitionStack.Screen>

      {/**Competition details */}
      <CompetitionStack.Screen
        component={CompetitionDetails}
        name="CompetitionDetails"
        options={{
          title: "Détails du concourss"
        }}
      ></CompetitionStack.Screen>

      {/**Competition list */}
      <CompetitionStack.Screen
        component={Competitions}
        name="Competitions"
        options={{
          title: "Liste des concours"
        }}
      ></CompetitionStack.Screen>

      {/**Competition edition */}
      <CompetitionStack.Screen
        component={EditCompetition}
        name="EditCompetition"
        options={({ route }) => ({
          title: route.params["competition"]
            ? route.params["competition"].name
            : "Ajout d'un concours"
        })}
      ></CompetitionStack.Screen>

      {/**Address search */}
      <CompetitionStack.Screen
        component={SearchAddress}
        name="SearchAddress"
        options={{
          title: "Rechercher une adresse"
        }}
      ></CompetitionStack.Screen>
    </CompetitionStack.Navigator>
  );
};
