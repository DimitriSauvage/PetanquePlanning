import { Feature, Point } from "geojson";
import Address from "../Models/Address";

export default class AddressHelper {
  public static featureToAddress = (feature: Feature<Point>) => {
    const address = new Address();
    address.latitude = feature.geometry.coordinates[0];
    address.longitude = feature.geometry.coordinates[1];
    address.number = feature.properties.feature.properties.housenumber;
    address.street = feature.properties.feature.properties.street;
    address.zipCode = feature.properties.feature.properties.zipCode;
    address.city = feature.properties.feature.properties.city;

    return address;
  };
}
