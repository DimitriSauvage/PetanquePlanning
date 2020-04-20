import Constants from "expo-constants";
import React from "react";
import { Platform } from "react-native";
import { LatLng } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

/**
 * Get marker direction with the api key
 * @param origin Origin
 * @param destination Destination
 */
export default () => (origin: LatLng, destination: LatLng) => {
  let apiKey = null;
  if (Platform.OS === "ios") {
    apiKey = Constants.manifest.ios.config.googleMapsApiKey;
  } else if (Platform.OS === "android") {
    apiKey = Constants.manifest.android.config.googleMaps.apiKey;
  }
  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      strokeColor="red"
      strokeWidth={2}
      apikey={apiKey}
    ></MapViewDirections>
  );
};
