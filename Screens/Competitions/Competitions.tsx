import { FontAwesome } from "@expo/vector-icons";
import { Fab } from "native-base";
import React, { FunctionComponent } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import CompetitionList from "../../Components/Competitions/CompetitionList/CompetitionList";
import Competition from "../../Models/Competition";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import { View } from "react-native";

interface CompetitionsProps {
  competitions: Competition[];
  navigation: any;
}

const Competitions: FunctionComponent<CompetitionsProps> = ({
  navigation,
  competitions
}) => {
  //#region Methods
  /**
   * Open the competition edition
   * @param competition Selected competition
   */
  const onSelect = competition => {
    editCompetition(competition);
  };

  /**
   * Navigate to the edition screen
   * @param competition Competition to edit
   */
  const editCompetition = (competition?: Competition) => {
    navigation.navigate("EditCompetition", { competition: competition });
  };
  //#endregion

  return (
    <SafeAreaView>
        {/* <Fab
          position="bottomLeft"
          style={{ backgroundColor: "red" }}
          onPress={() => editCompetition()}
          containerStyle={{}}
        >
          <FontAwesome name="plus"></FontAwesome>
        </Fab> */}

      <CompetitionList
        elements={competitions}
        onSelect={onSelect}
      ></CompetitionList>

      {/**Button to add a competition */}
    </SafeAreaView>
  );
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

export default connect(mapStateToProps)(Competitions);
