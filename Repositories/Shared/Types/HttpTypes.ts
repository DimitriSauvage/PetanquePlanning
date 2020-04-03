import { Method } from "axios";

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
export interface IHttpRequestResult<TWaitedResult> {
  /**
   * Error during the request
   */
  error: any;
  /**
    Request result */
  result: TWaitedResult;
  /**
   * Request is ongoing
   */
  ongoing: boolean;
}
