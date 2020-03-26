import * as Font from "expo-font";
import * as Localization from "expo-localization";
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
import Navigator from "./Navigation/Navigator";
import store from "./Store/configureStore";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
  "Remote debugger"
]);

moment.locale(Localization.locale);

//Initialize database
FirebaseHelper.initializeApp();

Font.loadAsync({
  Roboto: require("native-base/Fonts/Roboto.ttf"),
  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
});

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
