import { Guid } from "guid-typescript";
import Competition from "../../../../Models/Competition";

export default (state: Competition[], id: Guid): Competition[] => {
  return state.filter(x => !x.id.equals(id));
};
