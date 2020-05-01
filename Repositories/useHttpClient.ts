import axios, { AxiosInstance } from "axios";

/**
 * Get an HTTP Client to create request
 */
export default (): AxiosInstance => {
  return axios.create();
};
