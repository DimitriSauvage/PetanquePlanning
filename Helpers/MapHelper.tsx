import { Marker, LatLng } from "react-native-maps";
import Competition from "../Models/Competition";
import StringHelper from "./StringHelper";
import React from "react";
import MapViewDirections, {
  MapViewDirectionsProps
} from "react-native-maps-directions";
import { Platform } from "react-native";
import Constants from "expo-constants";

export default class MapHelper {
  /**
   * Transform a feature into an address
   * @param feature Feature to transform
   */
  public static competitionToMarker = (competition: Competition) => {
    //Get the description
    let description = competition.address.getFullAddress();
    if (competition?.description && competition.description.trim() !== "") {
      description =
        competition.description + StringHelper.CARRIAGE_RETURN + description;
    }
    return (
      <Marker
        key={competition.id.toString()}
        coordinate={competition.address.coordinate}
        title={competition.name}
        description={description}
      ></Marker>
    );
  };

  /**
   * Get marker direction with the api key
   */
  public static getMarkerDirection = (origin: LatLng, destination: LatLng) => {
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
}
