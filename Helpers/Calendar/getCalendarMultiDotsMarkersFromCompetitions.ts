import getColorFromString from "../Color/getColorFromString";
import areDatesEquals from "../Date/areDatesEquals";
import getCalendarStringFromDate from "./getCalendarStringFromDate";
import MultiDotMarkingType from "./Types/MultiDotMarking.type";
import { CompetitionDTO } from "../../Models/generated";

/**
 * Get multidots markers from competitions
 * @param competitions Competitions to use to create dots
 * @param selectedDate Selected date in the calendar
 */
export default (
  competitions: CompetitionDTO[],
  selectedDate?: Date
): MultiDotMarkingType => {
  const markers: MultiDotMarkingType = {};
  competitions.forEach((compet) => {
    //Date to a string format
    const dateString = getCalendarStringFromDate(compet.Date);

    //Add the date if not present
    if (!markers[dateString]) {
      markers[dateString] = {
        disabled: false,
        dots: [],
        selected: areDatesEquals(compet.Date, selectedDate),
      };
    }

    //Add a dot for the competition
    markers[dateString].dots.push({
      color: getColorFromString(dateString),
      key: compet.Id.toString(),
      selectedDotColor: "transparent",
    });
  });

  //If the selected date has no competition, it is not present in the result
  //Add it to select it
  const selectedDateString = getCalendarStringFromDate(selectedDate);
  if (selectedDate && !markers[selectedDateString]) {
    markers[selectedDateString] = {
      disabled: false,
      dots: [],
      selected: true,
    };
  }

  return markers;
};
