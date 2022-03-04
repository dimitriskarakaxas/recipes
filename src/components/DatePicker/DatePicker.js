import React from "react";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "./CustomDatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const DatePicker = ({ selectedDate, onDateChange, calendarClassName }) => {
  return (
    <Calendar
      value={selectedDate}
      onChange={onDateChange}
      calendarClassName={calendarClassName}
      // colorPrimary="#6a3cba"
      // colorPrimaryLight="gray"
      calendarTodayClassName="custom-today-day"
    />
  );
};

export default DatePicker;
