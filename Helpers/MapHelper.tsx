import { Marker } from "react-native-maps";
import Competition from "../Models/Competition";
import StringHelper from "./StringHelper";
import React from "react";

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
}
