import { IHttpPostParams, IHttpRequestResult } from "../../Types/HttpTypes";
import useHttpRequest from "./useHttpRequest";

/**
 * Realize a post request
 */
export default <TWaitedResult, TSendElement>(
  params: IHttpPostParams<TSendElement>
): IHttpRequestResult<TWaitedResult> => {
  return useHttpRequest<TWaitedResult>({
    ...params,
    method: "POST"
  });
};
