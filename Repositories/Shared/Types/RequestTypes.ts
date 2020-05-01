import WithError from "../../../Models/Types/WithError";
import WithOngoing from "../../../Models/Types/WithOngoing";

/**
 * Request value result type
 */
export interface IRequestValue<TValue> extends WithError, WithOngoing {
  /**Request result */
  value: TValue;
}
