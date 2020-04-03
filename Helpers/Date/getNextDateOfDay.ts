import moment from "moment";

/**
 * Get a date representing the next instance of the day
 * @param searchedDay Searched day number (1 = Monday...)
 */
export default (searchedDay: number): Date => {
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
