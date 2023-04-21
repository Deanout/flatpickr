import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("connected", this.element);

    flatpickr(".start_time", {
      enableTime: true,
      // human friendly date with time (EG: April 24, 2021 12:00 PM)
      dateFormat: "F j, Y h:i K",
      disable: [
        function (date) {
          // return true to disable
          return date.getDay() === 0 || date.getDay() === 6;
        },
      ],
      locale: {
        firstDayOfWeek: 0, // start week on Monday
      },
    });
    flatpickr(".end_time", {
      enableTime: true,
      // human friendly date with time (EG: April 24, 2021 12:00 PM)
      dateFormat: "F j, Y h:i K",
      disable: [
        function (date) {
          // return true to disable
          return date.getDay() === 0 || date.getDay() === 6;
        },
      ],
      locale: {
        firstDayOfWeek: 0, // start week on Monday
      },
    });
  }
}
