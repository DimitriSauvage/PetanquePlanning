import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditCompetition from "../../Screens/EditCompetition/EditCompetition";
import SearchAddress from "../../Screens/SearchAddress/SearchAddress";
import Competitions from "../../Screens/Competitions/Competitions";
import CompetitionsCalendar from "../../Screens/CompetitionsCalendar/CompetitionsCalendar";

const CompetitionStack = createStackNavigator();

export default () => {
  return (
    <CompetitionStack.Navigator initialRouteName={"CompetionsCalendar"}>
      <CompetitionStack.Screen
        component={CompetitionsCalendar}
        name="CompetionsCalendar"
        options={{
          title: "Calendrier des compétitions"
        }}
      ></CompetitionStack.Screen>

      {/**Competition list */}
      <CompetitionStack.Screen
        component={Competitions}
        name={"Competitions"}
        options={{
          title: "Liste des compétitions"
        }}
      ></CompetitionStack.Screen>

      {/**Competition edition */}
      <CompetitionStack.Screen
        component={EditCompetition}
        name={"EditCompetition"}
        options={({ route }) => ({
          title: route.params["competition"]
            ? route.params["competition"].name
            : "Ajout d'une compétition"
        })}
      ></CompetitionStack.Screen>

      {/**Address search */}
      <CompetitionStack.Screen
        component={SearchAddress}
        name={"SearchAddress"}
        options={{
          title: "Rechercher une adresse"
        }}
      ></CompetitionStack.Screen>
    </CompetitionStack.Navigator>
  );
};
