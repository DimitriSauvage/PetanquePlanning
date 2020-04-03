import getAdressApiBaseUrl from "./getAdressApiBaseUrl";

/**
 * Get the search api url
 */
export default (): string => {
  return `${getAdressApiBaseUrl()}/search`;
};

