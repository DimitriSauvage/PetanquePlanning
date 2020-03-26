import moment from "moment";

export default class DateHelper {
  /**
   * Get a date representing the next instance of the day
   * @param searchedDay Searched day number
   */
  public static getNextDateOfDay = (searchedDay: number): Date => {
    let result: Date = null;

    //Get the current day number
    const today = moment().isoWeekday();

    //Searched day is in the current week
    if (today <= searchedDay) {
      // then just give me this week's instance of that day
      result = moment()
        .isoWeekday(searchedDay)
        .toDate();
    } else {
      // Otherwise, i get the next week and get the day in this week
      result = moment()
        .add(1, "weeks")
        .isoWeekday(searchedDay)
        .toDate();
    }

    return result;
  };

  /**
   * Check if the date part of JS Date object are equals
   */
  public static areDatesEquals = (date1: Date, date2: Date): boolean => {
    return (
      (!date1 && !date2) ||
      (date1 &&
        date2 &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate())
    );
  };
}
