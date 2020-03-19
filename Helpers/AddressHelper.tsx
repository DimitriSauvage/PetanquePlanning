import { Feature, Point } from "geojson";
import Address from "../Models/Address";

export default class AddressHelper {
  /**
   * Transform a feature into an address
   * @param feature Feature to transform
   */
  public static featureToAddress = (feature: Feature<Point>) => {
    const address = new Address();
    address.coordinate.latitude = feature.geometry.coordinates[0];
    address.coordinate.longitude = feature.geometry.coordinates[1];
    address.number = feature.properties.feature.properties.housenumber;
    address.street = feature.properties.feature.properties.street;
    address.zipCode = feature.properties.feature.properties.zipCode;
    address.city = feature.properties.feature.properties.city;

    return address;
  };
}
