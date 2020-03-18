import "react-native-gesture-handler";
import { Root } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigator from "./Navigation/Navigator";
import store from "./Store/configureStore";

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
