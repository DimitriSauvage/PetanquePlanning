import { useState, useEffect } from "react";
import Competition from "../../Models/Competition";
import MultiDotMarkingType from "./Types/MultiDotMarking.type";
import getCalendarStringFromDate from "./getCalendarStringFromDate";
import areDateEquals from "../Date/areDateEquals";
import getColorFromString from "../Color/getColorFromString";

export interface IMultiDotsMarkersFromCompetitionsResult {
  markers: MultiDotMarkingType;
}

/**
 * Get multidots markers from competitions
 * @param competitions Competitions to use to create dots
 * @param selectedDate Selected date in the calendar
 */
export default (
  competitions: Competition[],
  selectedDate?: Date
): IMultiDotsMarkersFromCompetitionsResult => {
  const [markers, setMarkers] = useState<MultiDotMarkingType>({});

  const createMarkers = () => {
    const result: MultiDotMarkingType = {};
    competitions.forEach(compet => {
      //Date to a string format
      const dateString = getCalendarStringFromDate(compet.date);

      //Add the date if not present
      if (!result[dateString]) {
        markers[dateString] = {
          disabled: false,
          dots: [],
          selected: areDateEquals(compet.date, selectedDate)
        };
      }

      //Add a dot for the competition
      result[dateString].dots.push({
        color: getColorFromString(dateString),
        key: compet.id.toString(),
        selectedDotColor: "transparent"
      });
    });

    //If the selected date has no competition, it is not present in the result
    //Add it to select it
    const selectedDateString = getCalendarStringFromDate(selectedDate);
    if (selectedDate && !result[selectedDateString]) {
      result[selectedDateString] = {
        disabled: false,
        dots: [],
        selected: true
      };
    }

    setMarkers(result);
  };

  useEffect(() => {
    createMarkers();
  }, []);
  return { markers };
};
