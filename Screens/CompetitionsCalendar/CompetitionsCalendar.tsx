import { useNavigation } from "@react-navigation/native";
import { Text, View } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import CompetitionList from "../../Components/Competitions/CompetitionList/CompetitionList";
import CompetitionsAgenda from "../../Components/Competitions/CompetitionsAgenda/CompetitionsAgenda";
import areDatesEquals from "../../Helpers/Date/areDatesEquals";
import CompetitionsProps from "../../Shared/Props/Competitions.props";
import mapStateToProps from "../../Store/mapStateToProps";
import styles from "./Style";
import { CompetitionDTO } from "../../Models/generated";

interface CompetitionsCalendarScreenProps extends CompetitionsProps {}

const CompetitionsCalendar: FunctionComponent<CompetitionsCalendarScreenProps> = (
  props
) => {
  //#region Fields
  /**Navigator */
  const navigator = useNavigation();
  /**Initial selected date */
  const initialSelectedDate = new Date();
  //#endregion

  //#region Methods
  /**
   * Get the competitions for the specified date
   * @param date Competitions date
   */
  const getCompetitions = (date: Date): CompetitionDTO[] =>
    props.competitions.filter((compet) => areDatesEquals(date, compet.date));

  /**
   * Handle the day press event displaying selected day competitions
   * @param selectedDate Selected date
   */
  const onDaySelected = (selectedDate: Date) => {
    setDisplayedCompetitions(getCompetitions(selectedDate));
  };

  /**
   * Call when a competition is selected
   * @param competition Display the competition edition
   */
  const onCompetitionSelected = (competition) => {
    navigator.navigate("CompetitionDetails", { competition: competition });
  };
  //#endregion

  //#region State
  const [displayedCompetitions, setDisplayedCompetitions] = useState(
    getCompetitions(initialSelectedDate)
  );
  //#endregion

  return (
    <View style={styles.container}>
      {/**Display a calendar */}
      <CompetitionsAgenda
        competitions={props.competitions}
        onDayPress={onDaySelected}
      ></CompetitionsAgenda>

      {/**Display list of competitions */}
      {displayedCompetitions && displayedCompetitions.length > 0 && (
        <CompetitionList
          elements={displayedCompetitions}
          onSelect={onCompetitionSelected}
        ></CompetitionList>
      )}

      {/**Display a message where there is no comptitions to display */}
      {(!displayedCompetitions || displayedCompetitions.length === 0) && (
        <View style={styles.noCompetitions}>
          <Text style={styles.informationMessage}>
            Aucun concours pour cette date.
          </Text>
        </View>
      )}
    </View>
  );
};
export default connect(mapStateToProps("competitions"))(CompetitionsCalendar);
