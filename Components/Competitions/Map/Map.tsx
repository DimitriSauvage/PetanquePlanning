import React, { FunctionComponent } from "react";
import MapView, { Region } from "react-native-maps";
import CompetitionsProps from "../../../Shared/Props/Competitions.props";
import styles from "./Style";
import getCompetitionFromMarker from "../../../Helpers/Map/getCompetitionFromMarker";

interface MapProps extends CompetitionsProps {
  mapDelta?: Region;
  mapPosition?: Region;
}

const Map: FunctionComponent<MapProps> = (props) => {
  //#region Fields
  /**
   * Default delta
   */
  const defaultDelta = 0.5;
  /**
   * Initial position
   */
  const initialPosition: Region = {
    latitude: 47.47111129760742,
    longitude: -0.5482971668243408,
    latitudeDelta: defaultDelta,
    longitudeDelta: defaultDelta,
  };
  //#endregion
  
  return (
    <MapView
      style={styles.map}
      region={props.mapPosition ? props.mapPosition : initialPosition}
    >
      {props.competitions &&
        props.competitions.map((competition) =>
          getCompetitionFromMarker(competition)
        )}

      {/* {MapHelper.getMarkerDirection(origin, dest)} */}
    </MapView>
  );
};

export default Map;
