import getCarriageReturn from "../String/getCarriageReturn";
import { Marker } from "react-native-maps";
import React from "react";
import { CompetitionDTO } from "../../Models/generated";

/**
 * Transform a feature into an address
 * @param feature Feature to transform
 */
export default (competition: CompetitionDTO) => {
  //Get the description
  let description = competition.Address.FullAddress;
  if (competition?.Description && competition.Description.trim() !== "") {
    description = competition.Description + getCarriageReturn() + description;
  }
  return (
    <Marker
      key={competition.Id.toString()}
      {/**Parse and stringify because objects are not the sames */}
      coordinate={JSON.parse(JSON.stringify(competition.Address.Coordinate))}
      title={competition.Name}
      description={description}
    ></Marker>
  );
};
