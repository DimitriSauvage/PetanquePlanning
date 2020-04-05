import BaseAction from "../Actions/Types/baseAction";

/**
 * Reducer defintion
 */
type Reducer<TState> = (state: TState, action: BaseAction) => TState;

export default Reducer;
