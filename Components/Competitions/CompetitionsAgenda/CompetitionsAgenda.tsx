import { Icon } from "native-base";
import React, { FunctionComponent, useState } from "react";
import { Platform, ViewProps } from "react-native";
import {
  CalendarList,
  DateObject,
  MultiDotMarking
} from "react-native-calendars";
import CalendarHelper from "../../../Helpers/CalendarHelper";
import CompetitionsProps from "../../../Shared/Props/Competitions.props";
import DateHelper from "../../../Helpers/DateHelper";

//Props
interface CompetitionsAgendaProps extends CompetitionsProps, ViewProps {
  onDayPress: Function;
}

//Components
const CompetitionsAgenda: FunctionComponent<CompetitionsAgendaProps> = props => {
  //#region State
  const [markedDates, setMarkedDates] = useState(
    CalendarHelper.getMultiDotsMarkedDatesFromCompetitions(
      props.competitions,
      new Date()
    )
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  //#endregion

  //#region Fields
  //#endregion

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
  /**
   * Call when a date is selected
   * @param dateObject Selected date
   */
  const onDaySelected = (dateObject: DateObject) => {
    const newSelectedDate = new Date(dateObject.timestamp);
    if (!DateHelper.areDatesEquals(selectedDate, newSelectedDate)) {
      //Copy the dates because the object must be immutable
      const newMarkedDates = CalendarHelper.cloneMultiDotsMarkers(markedDates);
      const previousSelectedDateString = CalendarHelper.getStringDate(
        selectedDate
      );

      //Remove the selection of the previous selected date
      if (selectedDate && newMarkedDates[previousSelectedDateString]) {
        newMarkedDates[previousSelectedDateString].selected = false;
      }

      //Keep the new selected date
      setSelectedDate(newSelectedDate);

      //Set the new selectd date in the calendar
      if (!newMarkedDates[dateObject.dateString]) {
        newMarkedDates[dateObject.dateString] = {
          dots: [],
          disabled: false,
          selected: true
        } as MultiDotMarking;
      } else {
        newMarkedDates[dateObject.dateString].selected = true;
      }
      setMarkedDates(newMarkedDates);

      //Call parent method
      if (props.onDayPress) {
        props.onDayPress(newSelectedDate);
      }
    }
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
      current={selectedDate} //Current date
      hideDayNames={false} //Display day names
      hideArrows={false} //Display arrows to navigate betweens months
      hideExtraDays={false} //Display the previous and next days in grey
      renderArrow={getArrowIcon} // Get the arrow to display
      markingType="multi-dot"
      markedDates={markedDates}
      theme={{ selectedDayBackgroundColor: "red" }}
      onDayPress={onDaySelected}
      selected={CalendarHelper.getStringDate(new Date())}
    ></CalendarList>
  );
};

export default CompetitionsAgenda;
