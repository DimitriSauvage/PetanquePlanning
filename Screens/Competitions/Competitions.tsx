import { Button, Fab, Icon, View } from "native-base";
import React, { FunctionComponent } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import CompetitionList from "../../Components/Competitions/CompetitionList/CompetitionList";
import Competition from "../../Models/Competition";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import styles from "./Style";
import CompetitionsProps from "../../Shared/Props/Competitions.props";

interface CompetitionsScreenProps extends CompetitionsProps {
  navigation: any;
}

const Competitions: FunctionComponent<CompetitionsScreenProps> = ({
  navigation,
  competitions
}) => {
  //#region Add button in header bar for ios
  if (Platform.OS === "ios") {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button transparent>
            <Icon name="plus" type="Entypo" />
          </Button>
        )
      });
    }, []);
  }

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
    <View style={styles.container}>
      <CompetitionList
        elements={competitions}
        onSelect={onSelect}
      ></CompetitionList>
      {/**Button to add a competition for android */}
      {Platform.OS === "android" && (
        <Fab
          style={{ backgroundColor: "red" }}
          onPress={() => editCompetition()}
          containerStyle={{}}
        >
          <Icon name="plus" type="FontAwesome5" />
        </Fab>
      )}
    </View>
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