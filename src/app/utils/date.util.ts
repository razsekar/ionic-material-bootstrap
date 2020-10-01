import * as moment from "moment-mini-ts";
export class DateUtil {
  static dateStrFormat(dateObj, ignoreAMPM = false) {
    if (ignoreAMPM) {
      return moment(dateObj).format("DD-MMM-YYYY hh:mm:ss");
    }
    return moment(dateObj).format("DD-MMM-YYYY hh:mm A");
  }

  static currentDate(dateObj) {
    return moment(dateObj).format("YYYY-MM-DD");
  }
}
