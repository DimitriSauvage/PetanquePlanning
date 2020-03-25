import React, { FunctionComponent, useEffect, useState } from "react";
import { Region } from "react-native-maps";
import { connect } from "react-redux";
import Map from "../../Components/Competitions/Map/Map";
import LocationHelper from "../../Helpers/LocationHelper";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import CompetitionsProps from "../../Shared/Props/Competitions.props";

interface MapProps extends CompetitionsProps {}

const MapScreen: FunctionComponent<MapProps> = ({ competitions }) => {
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
    const setCurrentLocation = async () => {
      const currentPosition = await LocationHelper.getCurrentLocation();
      if (currentPosition != null) {
        const position: Region = {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: defaultDelta,
          longitudeDelta: defaultDelta
        };
        setMapPosition(position);
      }
    };

    setCurrentLocation();
  }, []);
  //Ask for permission

  //#endregion

  return <Map competitions={competitions} mapPosition={mapPosition}></Map>;
};

/**
 * Map the global app state to the props
 * @param state Global app state
 */
const mapStateToProps = (state: PetanquePlanningState) => {
  return {
    competitions: state.competitions
  };
};

export default connect(mapStateToProps)(MapScreen);
