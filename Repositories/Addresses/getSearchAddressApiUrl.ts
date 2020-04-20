import getAdressApiBaseUrl from "./getSearchAddressApiBaseUrl";

/**
 * Get the search api url
 */
export default (): string => {
  return `${getAdressApiBaseUrl()}/search`;
};

