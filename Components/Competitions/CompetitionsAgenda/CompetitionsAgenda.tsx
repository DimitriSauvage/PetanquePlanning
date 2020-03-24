import { Icon } from "native-base";
import React, { FunctionComponent } from "react";
import { Platform, ViewProps } from "react-native";
import {
  CalendarList,
  LocaleConfig,
  DateCallbackHandler
} from "react-native-calendars";
import CompetitionsProps from "../../../Shared/Props/Competitions.props";
import CalendarHelper from "../../../Helpers/CalendarHelper";

//Props
interface CompetitionsAgendaProps extends CompetitionsProps, ViewProps {
  onDayPress: DateCallbackHandler;
}

//Components
const CompetitionsAgenda: FunctionComponent<CompetitionsAgendaProps> = props => {
  //#region Methods
  /**
   * Get arrow icon
   * @param direction Arrow direction
   */
  const getArrowIcon = (direction: "left" | "right") => {
    const type = Platform.OS === "android" ? "MaterialIcons" : "Entypo";
    const name = direction === "left" ? "chevron-left" : "chevron-right";
    return <Icon type={type} name={name} />;
  };
  //#endregion

  CalendarHelper.setLocales();
  return (
    <CalendarList
      horizontal={true} //Display the calendar with an horizontal scroll
      scrollEnabled={true} //Enable the scroll
      pagingEnabled={true} //Enable paging to do not stop with a view between two months
      showScrollIndicator={false} //Hide scroll indicator
      firstDay={1} //Week start with monday
      current={new Date()} //Current date
      hideDayNames={false} //Display day names
      hideArrows={false} //Display arrows to navigate betweens months
      hideExtraDays={false} //Display the previous and next days in grey
      minDate={new Date()} //Min date selectable
      renderArrow={getArrowIcon} // Get the arrow to display
      markingType="multi-dot"
      markedDates={CalendarHelper.getMultiDotsMarkedDatesFromCompetitions(
        props.competitions
      )}
      theme={{ selectedDayBackgroundColor: "red" }}
      onDayPress={props.onDayPress ? props.onDayPress : undefined}
    ></CalendarList>
  );
};

export default CompetitionsAgenda;
