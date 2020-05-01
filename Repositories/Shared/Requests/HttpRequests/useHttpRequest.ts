import { useEffect, useState } from "react";
import { IHttpRequestBaseParams, IHttpRequestResult } from "../../Types/HttpTypes";
import useHttpClient from "../../../useHttpClient";
import useRequest from "../useRequest";

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
    const httpClient = useHttpClient();

    //Fetch data
    return (await httpClient.request<TWaitedResult>({ ...params })).data;
  });
};
