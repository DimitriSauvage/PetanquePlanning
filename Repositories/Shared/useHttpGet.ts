import { IHttpGetParams, IHttpRequestResult } from "./Types/HttpTypes";
import useHttpRequest from "./useHttpRequest";

/**
 * Realize a get request
 */
export default <TWaitedResult>(
  params: IHttpGetParams
): IHttpRequestResult<TWaitedResult> => {
  return useHttpRequest<TWaitedResult>({
    ...params,
    method: "GET"
  });
};
