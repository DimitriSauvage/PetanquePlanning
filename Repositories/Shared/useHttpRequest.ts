import { useEffect, useState } from "react";
import getHttpClient from "../getHttpClient";
import { IHttpRequestBaseParams, IHttpRequestResult } from "./Types/HttpTypes";

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
  const httpClient = getHttpClient();
  const [ongoing, setOngoing] = useState(false);
  const [error, setError] = useState<any>();
  const [result, setResult] = useState<TWaitedResult>();

  const fetch = async () => {
    setOngoing(true);
    try {
      //Set the request
      const result = await httpClient.request<TWaitedResult>({ ...params });
      if (!result.status.toString().startsWith("2")) {
        setError(
          `HTTP request did not succeed. Status code = ${result.status.toString} : ${result.statusText}`
        );
      } else {
        //Get and set the result
        setResult(result.data);
      }
    } catch (error) {
      setError(error);
    }
    //Stop ongoing
    setOngoing(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { ongoing, result, error };
};
