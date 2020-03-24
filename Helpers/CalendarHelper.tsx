import moment from "moment";
import { LocaleConfig, MultiDotMarking } from "react-native-calendars";
import Competition from "../Models/Competition";
import ColorHelper from "./ColorHelper";

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
    competitions: Competition[]
  ) => {
    //Final result
    const result: { [date: string]: MultiDotMarking } = {};

    competitions.forEach(compet => {
      //Date to a string format
      const dateString = moment(compet.date).format(
        CalendarHelper.calendarDateFormat
      );

      //Add the date if not present
      if (!result[dateString]) {
        result[dateString] = {
          disabled: false,
          dots: [],
          selected: false
        };
      }

      //Add a dot for the competition
      result[dateString].dots.push({
        color: ColorHelper.getColorFromString(dateString),
        key: compet.id.toString()
      });
    });

    return result;
  };
}
