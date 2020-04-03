import moment from "moment";
import getCalendarFormat from "./getCalendarFormat";

/**
 * Get a date to a string for the calendar
 * @param date Date to transform to string
 */
export default (date: Date): string => moment(date).format(getCalendarFormat());
