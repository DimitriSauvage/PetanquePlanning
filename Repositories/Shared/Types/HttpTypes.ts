import { Method } from "axios";
import WithOngoing from "../../../Models/Types/WithOngoing";
import WithError from "../../../Models/Types/WithError";
import { IRequestValue } from "./RequestTypes";

/**
 * Post params
 */
export interface IHttpPostParams<TSendElement> extends IHttpRequestBaseParams {
  /**
   * Data to send
   */
  data: TSendElement;
}

/**
 * Put params
 */
export interface IHttpPutParams<TSendElement> extends IHttpRequestBaseParams {
  /**
   * Data to send
   */
  data: TSendElement;
}

/**
 * Get params
 */
export interface IHttpGetParams extends IHttpRequestBaseParams {}

/**
 * HTTP Request base params
 */
export interface IHttpRequestBaseParams {
  /**
   * Request base URL
   */
  baseURL: string;
  /**
   * Request method
   */
  method?: Method;
  /**
   * Request params
   */
  params?: object;
}

/**
 * Request result
 */
export interface IHttpRequestResult<TWaitedResult>
  extends IRequestValue<TWaitedResult> {}
