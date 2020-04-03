import { FeatureCollection, Point } from "geojson";
import { useEffect, useState } from "react";
import featureToAddress from "../../Helpers/Address/featureToAddress";
import Address from "../../Models/Address";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";
import useHttpGet from "../Shared/useHttpGet";
import getSearchAdressApiUrl from "./getSearchAdressApiUrl";

export interface ISearchAdressResult extends IHttpRequestResult<Address[]> {
  setSearchedValue: (value: string) => void;
}

/**
 * Search an address in the api
 * @param resultsLimit Max result count
 * @param autoComplete Auto complete the searched value in the result
 */
export const useSearchAddress = (
  resultsLimit: number = 10,
  autoComplete: boolean = true
): ISearchAdressResult => {
  //Value to search
  const [searchedValue, setSearchedValue] = useState<string>();
  //Found addresses
  const [addresses, setAddresses] = useState<Address[]>([]);
  //When the request is ongoing
  const [ongoing, setOngoing] = useState(false);
  //If there is an error
  const [error, setError] = useState(null);

  /**
   * Search the address
   */
  const searchAddress = async (): Promise<void> => {
    //Set ongoing
    setOngoing(true);

    //Get addresses
    try {
      const response = useHttpGet<FeatureCollection<Point>>({
        baseURL: `${getSearchAdressApiUrl()}?q=${searchedValue}&limit=${resultsLimit}&autocomplete=${+autoComplete}`
      });

      //Transform feature to address
      setError(null);
      setOngoing(response.ongoing);
      setAddresses(
        response.result.features
          .sort((a, b) => b.properties.score - a.properties.score)
          .map(x => featureToAddress(x))
      );
    } catch (error) {
      setError(error);
      setOngoing(false);
    }
  };

  //Launch searching
  useEffect(() => {
    if (searchedValue !== null) {
      searchAddress();
    }
  }, [searchedValue]);

  return {
    error,
    ongoing,
    result: addresses,
    setSearchedValue
  };
};
