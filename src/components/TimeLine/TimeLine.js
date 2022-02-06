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

const TimeLine = (props) => {
  return (
    <div className="mt-20 h-96 rounded-md overflow-y-scroll">
      {HOURS.map((hour) => (
        <HourLine key={hour} hour={hour} onShowAddRecipe={props.onShowAddRecipe} />
      ))}
    </div>
  );
};

export default TimeLine;
