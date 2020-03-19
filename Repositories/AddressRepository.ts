import { FeatureCollection, Point } from "geojson";
import * as HttpStatus from "http-status-codes";
import AddressHelper from "../Helpers/AddressHelper";
import Address from "../Models/Address";
import Repository from "./Repository";
import { Toast } from "native-base";

/**
 * Address repository
 */
class AddressRepository extends Repository {
  //#region Fields
  /**
   * Base API Url
   */
  private baseApiURL = "https://api-adresse.data.gouv.fr";
  /**
   * Search base URL
   */
  private baseSearchURL = "/search";
  //#endregion

  //#region Methods
  /**
   * Search addresses
   * @param searchedValue Value to search
   * @param resultsLimit Max results count
   */
  public searchAddress = async (
    searchedValue: string,
    resultsLimit: number = 10
  ) => {
    //Result
    let result: Address[] = [];

    //Get addresses
    const response = await this.httpClient.get<FeatureCollection<Point>>(
      `${this.baseApiURL +
        this.baseSearchURL}?q=${searchedValue}&limit=${resultsLimit}`
    );

    Toast.show({ text: "Result : " + JSON.stringify(result) });

    //Transform feature to address
    if (response.status == HttpStatus.OK) {
      result = response.data.features
        .sort((a, b) => b.properties.score - a.properties.score)
        .map(x => AddressHelper.featureToAddress(x));
    }

    return result;
  };
  //#endregion
}

export default new AddressRepository();
