import React, { useState } from "react";
import User from "../../Models/Users/User";
import ConnectedUserContext from "./ConnectedUserContext";

export interface WithConnectedUserProps {
  connectedUser?: User;
}

export default (props) => (Component) => {
  const [connectedUser, setConnectedUser] = useState<User>(null);
  return (
    <ConnectedUserContext.Provider value={{ connectedUser, setConnectedUser }}>
      <Component {...props}></Component>
    </ConnectedUserContext.Provider>
  );
};
