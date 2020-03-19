import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Toast } from "native-base";
import React, { useState, useEffect } from "react";
import MapView, { Region } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import PermissionsHelper from "../../Helpers/PermissionsHelper";
import styles from "./Style";

const Map = () => {
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

  //#region State
  /**
   * Map position
   */
  const [mapPosition, setMapPosition] = useState(initialPosition);
  //#endregion

  //#region Get current position
  useEffect(() => {
    /**
     * Get the current user location
     */
    const getCurrentLocation = async () => {
      if (!PermissionsHelper.isGranted(Permissions.LOCATION)) {
        //Inform the user we cannot locate him
        Toast.show({
          text: `Authorisation de localisation non accordée. La carte sera mise à une position par défaut`,
          type: "warning"
        });
      } else {
        //Get current position
        try {
          let location = await Location.getCurrentPositionAsync();
          if (location != null) {
            const position: Region = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: defaultDelta,
              longitudeDelta: defaultDelta
            };
            setMapPosition(position);
          }
        } catch (error) {
          Toast.show({
            text:
              "Récupération de votre position impossible. La carte sera mise à une position par défaut",
            type: "warning"
          });
        }
      }
    };

    getCurrentLocation();
  }, []);
  //Ask for permission

  //#endregion

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView style={styles.map} region={mapPosition}></MapView>
    </SafeAreaView>
  );
};

export default Map
