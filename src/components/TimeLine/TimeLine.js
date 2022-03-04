import React from "react";

import HourLine from "./HourLine";

const HOURS = [
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
];

const TimeLine = ({ onTimeChange, onShowAddRecipe, selectedDate }) => {
  return (
    <div className="h-96 mt-12 rounded-md overflow-y-scroll xl:w-2/4 xl:m-0">
      {HOURS.map((hour) => (
        <HourLine
          key={hour}
          hour={hour}
          onTimeChange={onTimeChange}
          onShowAddRecipe={onShowAddRecipe}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
};

export default TimeLine;
