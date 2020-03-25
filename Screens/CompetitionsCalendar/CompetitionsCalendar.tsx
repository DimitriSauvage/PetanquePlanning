import { View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import CompetitionsAgenda from "../../Components/Competitions/CompetitionsAgenda/CompetitionsAgenda";
import PetanquePlanningState from "../../Models/PetanquePlanningState";
import CompetitionsProps from "../../Shared/Props/Competitions.props";
import styles from "./Style";
import CompetitionList from "../../Components/Competitions/CompetitionList/CompetitionList";
import moment from "moment";
import { DateCallbackHandler, DateObject } from "react-native-calendars";
import DateHelper from "../../Helpers/DateHelper";
import { ScrollView } from "react-native-gesture-handler";

interface CompetitionsCalendarScreenProps extends CompetitionsProps {}

const CompetitionsCalendar: FunctionComponent<CompetitionsCalendarScreenProps> = props => {
  //#region State
  const [displayedCompetitions, setDisplayedCompetitions] = useState(
    props.competitions
  );
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
  //#endregion
  return (
    <View style={styles.container}>
      {/**Display a calendar */}

      <CompetitionsAgenda
        competitions={props.competitions}
        onDayPress={onDaySelected}
      ></CompetitionsAgenda>

      {/**Display list of competitions */}
      <CompetitionList elements={displayedCompetitions}></CompetitionList>
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
