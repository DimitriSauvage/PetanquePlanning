import BaseAction from "./Actions/Types/baseAction";
import { Action } from "redux";
import PetanquePlanningState from "./States/PetanquePlanningState";

/**
 * Get a function which will map the specified state fields in the component props
 * @param fields Fields to map in the props
 */
export default (...fields: string[]) => {
  //Return a function to create the function to give to redux
  return (state: PetanquePlanningState) => {
    //Build the result
    const result = {};
    fields.forEach((field) => {
      if (state[field]) {
        result[field] = state[field];
      }
    });

    return result;
  };
};
