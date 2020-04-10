import React, { useState, FC } from "react";
import User from "../../Models/Users/User";
import ConnectedUserContext from "./ConnectedUserContext";

export interface WithConnectedUserProps {
  connectedUser?: User;
}

export default (Component: FC) => (props) => {
  const [connectedUser, setConnectedUser] = useState<User>(props.connectedUser);
  return (
    <ConnectedUserContext.Provider value={{ connectedUser, setConnectedUser }}>
      <Component {...props}></Component>
    </ConnectedUserContext.Provider>
  );
};
