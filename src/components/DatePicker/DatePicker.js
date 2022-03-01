import React from "react";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "./CustomDatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <Calendar
      value={selectedDate}
      onChange={onDateChange}
      calendarClassName="responsive-calendar"
      colorPrimary="#6a3cba"
      calendarTodayClassName="custom-today-day"
    />
  );
};

export default DatePicker;
