import React from "react";
import { Provider } from "react-redux";
import { compose, withHooks } from "wizhooks";
import useFonts from "../Helpers/Fonts/useFonts";
import Navigator from "../Navigation/Navigator";
import useConnectedUser from "../Repositories/Authentication/useConnectedUser";
import store from "../Store/configureStore";
import withConnectedUserContext from "./Contexts/withConnectedUserContext";
import withLoading from "./HOC/withLoading";

const PetanquePlanningApp = () => {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
};

export default compose(
  withHooks({ hook: useFonts }, { hook: useConnectedUser }),
  withLoading,
  withConnectedUserContext
)(PetanquePlanningApp);
