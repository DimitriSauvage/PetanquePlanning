import useRequest from "../Requests/useRequest";
import { IHttpRequestBaseParams, IHttpRequestResult } from "../Types/HttpTypes";
import useHttpClient from "../../useHttpClient";

/**
 * Realize an http request with the different parameters
 * @param baseURL Url to fetch
 * @param method HTTP Request method
 * @param data Data to insert in the request
 * @param params Request params
 */
export default <TWaitedResult>(
  params: IHttpRequestBaseParams
): IHttpRequestResult<TWaitedResult> => {
  return useRequest<TWaitedResult>(async () => {
    //Get http client to use to realize the request
    const httpClient = useHttpClient();

    //Fetch data
    return (await httpClient.request<TWaitedResult>({ ...params })).data;
  });
};
