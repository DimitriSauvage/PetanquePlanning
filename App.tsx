import * as Localization from "expo-localization";
import * as firebase from "firebase";
import "firebase/firestore";
import moment from "moment";
import "moment/min/locales";
import { Root } from "native-base";
import React from "react";
import { YellowBox } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import FirebaseHelper from "./Helpers/FirebaseHelper";
import Profile from "./Models/Users/Profile";
import User from "./Models/Users/User";
import Navigator from "./Navigation/Navigator";
import store from "./Store/configureStore";
import AuthRepository from "./Repositories/AuthRepository";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
  "Remote debugger"
]);

moment.locale(Localization.locale);

//Initialize database
FirebaseHelper.initializeApp();

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
