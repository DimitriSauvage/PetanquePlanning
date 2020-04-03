import getCarriageReturn from "../String/getCarriageReturn";
import Competition from "../../Models/Competition";
import { Marker } from "react-native-maps";

/**
 * Transform a feature into an address
 * @param feature Feature to transform
 */
export default (competition: Competition) => {
  //Get the description
  let description = competition.address.getFullAddress();
  if (competition?.description && competition.description.trim() !== "") {
    description = competition.description + getCarriageReturn() + description;
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
