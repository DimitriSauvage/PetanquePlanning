import { Component, useState } from "react";
import User from "../../Models/Users/User";
import React from "react";
import ConnectedUserContext from "./ConnectedUserContext";

export default (Component: Component) => {
  const [connectedUser, setConnectedUser] = useState<User>(null);
  return (
    <ConnectedUserContext.Provider
      value={{ connectedUser, setConnectedUser }}
    ></ConnectedUserContext.Provider>
  );
};
