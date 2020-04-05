import BaseAction from "../Actions/Types/baseAction";

type ReducerHandler<TState> = {
  [x: string]: (state: TState, action: BaseAction<any>) => TState;
};

/**
 * Create a reducer
 * @param initialState Initial state
 * @param handlers Object representing the actions for the reducer
 * @type TPayload Payload type
 * @type TStateElements Managed elements in the state
 */
export const createReducer = <TState>(
  initialState: TState,
  handlers: ReducerHandler<TState>
) => {
  //Return a method which search in the handlers if we have the action. If not, return the initial state
  return (state: TState = initialState, action: BaseAction<any>) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
