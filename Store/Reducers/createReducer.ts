import BaseAction from "../Actions/Types/baseAction";
import {
  PetanquePlanningState,
  getInitialState,
} from "../PetanquePlanningState";

type ReducerHandler<TPayload> = {
  [x: string]: (
    state: PetanquePlanningState,
    action: BaseAction<TPayload>
  ) => PetanquePlanningState;
};

/**
 * Create a reducer
 * @param handlers Object representing the actions for the reducer
 * @type TPayload Payload type
 * @type TStateElements Managed elements in the state
 */
export const createReducer = <TPayload>(handlers: ReducerHandler<TPayload>) => {
  return (
    state: PetanquePlanningState = getInitialState(),
    action: BaseAction<TPayload>
  ) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
