import { Marker } from "react-native-maps";
import Competition from "../Models/Competition";
import StringHelper from "./StringHelper";

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
        coordinate={competition.address.coordinate}
        title={competition.name}
        description={description}
      ></Marker>
    );
  };
}
