import { Feature, Point } from "geojson";
import Address from "../Models/Address";

export default class AddressHelper {
  /**
   * Transform a feature into an address
   * @param feature Feature to transform
   */
  public static featureToAddress = (feature: Feature<Point>) => {
    const address = new Address();
    address.coordinate = {
      latitude: feature.geometry.coordinates[0],
      longitude: feature.geometry.coordinates[1]
    };
    address.number = feature.properties.housenumber;
    address.street = feature.properties.street;
    address.zipCode = feature.properties.postcode;
    address.city = feature.properties.city;

    return address;
  };
}
