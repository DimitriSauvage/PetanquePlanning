import { LatLng } from "react-native-maps";
import { useState, useEffect } from "react";
import getPermission from "../Permissions/getPermission";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export interface ICurrentLocationResult {
  location: LatLng;
  loading: boolean;
  error: any;
}

/**
 * Get the current location of the user
 */
export default (): ICurrentLocationResult => {
  const [location, setLocation] = useState<LatLng>(null);
  const { permissionStatus, ongoing } = getPermission(Permissions.LOCATION);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCurrentLocation = async () => {
    setLoading(true);
    if (permissionStatus === Permissions.PermissionStatus.GRANTED) {
      //Get current position
      try {
        let location = await Location.getCurrentPositionAsync();
        if (location != null) {
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });
        }
      } catch (error) {
        setError(error);
      }
    }

    setLoading(false);
  };

  //Launch
  useEffect(() => {
    getCurrentLocation();
  }, [permissionStatus]);

  return {
    loading: ongoing || loading,
    location,
    error
  };
};
