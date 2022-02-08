import React, { useState } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./CustomDatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const DatePicker = () => {
  // Getting current date
  const defaultDatePickerDate = utils().getToday();

  const [selectedDay, setSelectedDay] = useState(defaultDatePickerDate);

  // console.log(selectedDay);

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      calendarClassName="responsive-calendar"
      colorPrimary="#6a3cba"
      calendarTodayClassName="custom-today-day"
    />
  );
};

export default DatePicker;
