import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Toast } from "native-base";
import React, { useEffect, useState, FunctionComponent } from "react";
import MapView, { Region, Marker, LatLng } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import styles from "./Style";
import CompetitionsProps from "../../../Shared/Props/Competitions.props";
import MapHelper from "../../../Helpers/MapHelper";

interface MapProps extends CompetitionsProps {
  mapDelta?: Region;
  mapPosition?: Region;
}

const Map: FunctionComponent<MapProps> = props => {
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
    longitudeDelta: defaultDelta
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
        props.competitions.map(competition =>
          MapHelper.competitionToMarker(competition)
        )}

      {/* {MapHelper.getMarkerDirection(origin, dest)} */}
    </MapView>
  );
};

export default Map;
