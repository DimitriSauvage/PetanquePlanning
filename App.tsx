import * as Localization from "expo-localization";
import "firebase/firestore";
import moment from "moment";
import "moment/min/locales";
import { Root } from "native-base";
import React from "react";
import { YellowBox } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import initializeFirebaseApp from "./Helpers/Firebase/initializeFirebaseApp";
import PetanquePlanningApp from "./Shared/PetanquePlanningApp";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
  "Remote debugger",
]);

moment.locale(Localization.locale);

//Initialize database
initializeFirebaseApp();

//Change moment globally
export default function App() {
  return (
    <SafeAreaProvider>
      {/**Root component for native base (Toast...) */}
      <Root>
        {/**Real application */}
        <PetanquePlanningApp></PetanquePlanningApp>
      </Root>
    </SafeAreaProvider>
  );
}
