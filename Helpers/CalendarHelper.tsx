import moment from "moment";
import {
  LocaleConfig,
  MultiDotMarking,
  Calendar
} from "react-native-calendars";
import Competition from "../Models/Competition";
import ColorHelper from "./ColorHelper";
import DateHelper from "./DateHelper";

//Declared here to simplify the usage
export type MultiDotMarkingType = { [date: string]: MultiDotMarking };

export default class CalendarHelper {
  //#region Fields
  /**
   * Calendar date format
   */
  private static calendarDateFormat = "YYYY-MM-DD";
  //#endregion

  /**
   * Define the locale for the calendar
   */
  public static setLocales = (): void => {
    LocaleConfig.locales["fr"] = {
      monthNames: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ],
      monthNamesShort: [
        "Janv.",
        "Févr.",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil.",
        "Août",
        "Sept.",
        "Oct.",
        "Nov.",
        "Déc."
      ],
      dayNames: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
      ],
      dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."]
    };
    LocaleConfig.defaultLocale = "fr";
  };

  /**
   * Get the marked dates from competitions
   */
  public static getMultiDotsMarkedDatesFromCompetitions = (
    competitions: Competition[],
    selectedDate?: Date
  ) => {
    //Final result
    const result: MultiDotMarkingType = {};

    competitions.forEach(compet => {
      //Date to a string format
      const dateString = CalendarHelper.getStringDate(compet.date);

      //Add the date if not present
      if (!result[dateString]) {
        result[dateString] = {
          disabled: false,
          dots: [],
          selected: DateHelper.areDatesEquals(compet.date, selectedDate)
        };
      }

      //Add a dot for the competition
      result[dateString].dots.push({
        color: ColorHelper.getColorFromString(dateString),
        key: compet.id.toString()
      });
    });

    //If the selected date has no competition, it is not present in the result
    //Add it to select it
    const selectedDateString = CalendarHelper.getStringDate(selectedDate);
    if (selectedDate && !result[selectedDateString]) {
      result[selectedDateString] = {
        disabled: false,
        dots: [],
        selected: true
      };
    }

    return result;
  };

  /**
   * Get date in string format with the calendar format
   */
  public static getStringDate = (date: Date) =>
    moment(date).format(CalendarHelper.calendarDateFormat);

  /**
   * Clone a multidot markers object
   */
  public static cloneMultiDotsMarkers = (
    markers: MultiDotMarkingType
  ): MultiDotMarkingType =>
    JSON.parse(JSON.stringify(markers)) as MultiDotMarkingType;
}
