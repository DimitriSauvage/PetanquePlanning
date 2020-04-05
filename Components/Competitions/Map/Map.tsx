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

  // const origin: LatLng = {
  //   latitude: 47.4701573,
  //   longitude: -0.5312701
  // };

  // const dest: LatLng = {
  //   latitude: 48.2145992,
  //   longitude: -1.5059748
  // };
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
