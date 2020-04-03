import { Feature, Point } from "geojson";
import Address from "../../Models/Address";

/**
 * Transform a feature to an address
 * @param feature Feature ton transform
 */
export default (feature: Feature<Point>): Address => {
  const address = new Address();
  address.coordinate = {
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0]
  };
  address.number = feature.properties.housenumber;
  address.street = feature.properties.street;
  address.zipCode = feature.properties.postcode;
  address.city = feature.properties.city;

  return address;
};
