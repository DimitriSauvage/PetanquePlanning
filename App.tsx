import * as Localization from "expo-localization";
import moment from "moment";
import "moment/min/locales";
import { Root } from "native-base";
import React from "react";
import { YellowBox } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import User from "./Models/Users/User";
import Navigator from "./Navigation/Navigator";
import AuthRepository from "./Repositories/AuthRepository";
import store from "./Store/configureStore";
import Profile from "./Models/Users/Profile";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
  "Remote debugger"
]);

moment.locale(Localization.locale);

const user = new User();
user.birthDate = new Date(1993, 10, 30);
user.name = "SAUVAGE";
user.firstName = "Dimitri";
user.password = "Test";
user.profile = Profile.Admin;
user.subscriptionDate = new Date();
user.club = null;
user.email = "dimitri1993@live.fr";

//Change moment globally
export default function App() {

  return (
    <SafeAreaProvider>
      {/**Root component for native base (Toast...) */}
      <Root>
        {/**Redux store */}
        <Provider store={store}>
          {/**Navigation */}
          <Navigator></Navigator>
        </Provider>
      </Root>
    </SafeAreaProvider>
  );
}
