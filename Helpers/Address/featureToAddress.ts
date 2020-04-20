import { Feature, Point } from "geojson";
import { Address, LatLng } from "../../Models/generated";
import { lang } from "moment";
import getFullAddress from "./getFullAddress";

/**
 * Transform a feature to an address
 * @param feature Feature ton transform
 */
export default (feature: Feature<Point>): Address => {
  const address = new Address();
  address.Coordinate = new LatLng();
  address.Coordinate.Longitude = feature.geometry.coordinates[0];
  address.Coordinate.Latitude = feature.geometry.coordinates[1];
  address.Number = feature.properties.housenumber;
  address.Street = feature.properties.street;
  address.ZipCode = feature.properties.postcode;
  address.City = feature.properties.city;
  address.FullAddress = getFullAddress(address);

  return address;
};
