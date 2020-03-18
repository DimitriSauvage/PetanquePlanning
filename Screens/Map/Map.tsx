import Geolocation, { GeolocationConfiguration } from "@react-native-community/geolocation";
import React, { useState } from "react";
import MapView, { Region } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Style";

export default () => {
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
  /**
   * Geo API config
   */
  const geoConfig: GeolocationConfiguration = {
    skipPermissionRequests: false,
    authorizationLevel: "whenInUse"
  };
  //#endregion

  //#region State
  /**
   * Map position
   */
  const [mapPosition, setMapPosition] = useState(initialPosition);
  //#endregion

  //#region Set geoconfig
  Geolocation.setRNConfiguration(geoConfig);
  Geolocation.getCurrentPosition(
    geoResponse => {
      const position = {
        latitude: geoResponse.coords.latitude,
        longitude: geoResponse.coords.longitude,
        latitudeDelta: defaultDelta,
        longitudeDelta: defaultDelta
      };
      setMapPosition(position);
    },
    geoError => console.log(geoError)
  );
  //#endregion

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView style={styles.map} region={mapPosition}></MapView>
    </SafeAreaView>
  );
};
