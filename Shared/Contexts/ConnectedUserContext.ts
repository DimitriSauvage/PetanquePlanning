import React from "react";
import User from "../../Models/Users/User";

type ConnectedUserContextElements = {
  connectedUser: User;
  setConnectedUser: React.Dispatch<React.SetStateAction<User>>;
};
export default React.createContext<ConnectedUserContextElements>(null);
