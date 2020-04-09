import BaseAction from "./Actions/Types/baseAction";
import { Action } from "redux";

/**
 * Map the dispatch action to component props
 * @param dispatch Dispatch method
 */
export default <TPayload>(dispatch: (action: Action) => void) => {
  return {
    dispatch: (action: BaseAction<TPayload>) => dispatch(action),
  };
};
