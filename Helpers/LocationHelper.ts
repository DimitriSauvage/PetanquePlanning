import PermissionsHelper from "./PermissionsHelper";
import * as Permissions from "expo-permissions";
import { Toast } from "native-base";
import * as Location from "expo-location";
import { LatLng } from "react-native-maps";

export default class LocationHelper {
  //#region Fields
  private static defaultDelta = 0.5;
  //#endregion

  //#region Methods
  /**
   * Get the current user location
   */
  public static getCurrentLocation = async (): Promise<LatLng> => {
    let result: LatLng = null;
    if (!PermissionsHelper.isGranted(Permissions.LOCATION)) {
      //Inform the user we cannot locate him
      Toast.show({
        text: `Authorisation de localisation non accordée. Impossible de récupérer votre position`,
        type: "warning"
      });
    } else {
      //Get current position
      try {
        let location = await Location.getCurrentPositionAsync();
        if (location != null) {
          result = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
        }
      } catch (error) {
        Toast.show({
          text: "Récupération de votre position impossible : " + error,
          type: "danger"
        });
      }
    }

    return result;
  };
  //#endregion
}
