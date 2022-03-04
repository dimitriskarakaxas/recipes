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
      colorPrimary="#7e22ce"
      colorPrimaryLight="#d0b5e8"
      calendarTodayClassName="custom-today-day"
    />
  );
};

export default DatePicker;
