import { Action } from "redux";

export default interface BaseAction<TPayload> extends Action<string> {
    payload: TPayload;
}
