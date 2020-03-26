import { View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import CompetitionList from "../../Components/Competitions/CompetitionList/CompetitionList";
import CompetitionsAgenda from "../../Components/Competitions/CompetitionsAgenda/CompetitionsAgenda";
import DateHelper from "../../Helpers/DateHelper";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import CompetitionsProps from "../../Shared/Props/Competitions.props";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";

interface CompetitionsCalendarScreenProps extends CompetitionsProps {
}

const CompetitionsCalendar: FunctionComponent<CompetitionsCalendarScreenProps> = props => {
  //#region State
  const [displayedCompetitions, setDisplayedCompetitions] = useState(
    props.competitions
  );
  //#endregion

  //#region Fields
  const navigator = useNavigation();
  //#endregion

  //#region Methods
  /**
   * Handle the day press event displaying selected day competitions
   * @param selectedDate Selected date
   */
  const onDaySelected = (selectedDate: Date) => {
    const compets = props.competitions.filter(compet =>
      DateHelper.areDatesEquals(selectedDate, compet.date)
    );
    setDisplayedCompetitions(compets);
  };

  /**
   * Call when a competition is selected
   * @param competition Display the competition edition
   */
  const onCompetitionSelected = competition => {
    navigator.navigate("CompetitionDetails", { competition: competition });
  };
  //#endregion
  return (
    <View style={styles.container}>
      {/**Display a calendar */}

      <CompetitionsAgenda
        competitions={props.competitions}
        onDayPress={onDaySelected}
      ></CompetitionsAgenda>

      {/**Display list of competitions */}
      <CompetitionList
        elements={displayedCompetitions}
        onSelect={onCompetitionSelected}
      ></CompetitionList>
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

export default connect(mapStateToProps)(CompetitionsCalendar);
