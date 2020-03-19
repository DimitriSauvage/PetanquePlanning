import * as Permissions from "expo-permissions";
import { Permission } from "react-native";

export default class PermissionsHelper {
  /**
   * Check if a permission is granted
   * @param permission Permission to get
   * @param askForPermission Ask for the permission if it is not already granted
   */
  public static isGranted = async (
    permission: Permissions.PermissionType,
    askForPermission: boolean = true
  ) => {
    let result = false;

    //Get current permission
    const currentPermission: Permissions.PermissionResponse = await Permissions.getAsync(
      permission
    );

    if (currentPermission.granted) {
      result = true;
    } else {
      if (currentPermission.canAskAgain && askForPermission) {
        //Ask for the permission
        const newPermission = await Permissions.askAsync(permission);
        result = newPermission.granted;
      }
    }

    return result;
  };
}
