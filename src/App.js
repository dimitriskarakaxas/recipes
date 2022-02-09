import React, { useState } from "react";

import AppWrapper from "./components/UI/AppWrapper";
import DatePicker from "./components/DatePicker/DatePicker";
import TimeLine from "./components/TimeLine/TimeLine";
import AddRecipe from "./components/AddRecipe/AddRecipe";

import { utils } from "react-modern-calendar-datepicker";

function App() {
  const [addRecipeIsShown, setAddRecipeIsShown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(utils().getToday());
  const [selectedTime, setSelectedTime] = useState(null);

  const showAddRecipeHandler = () => {
    setAddRecipeIsShown(true);
  };

  const hideAddRecipeHandler = () => {
    setAddRecipeIsShown(false);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <AppWrapper>
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <TimeLine onTimeChange={setSelectedTime} onShowAddRecipe={showAddRecipeHandler} selectedDate={selectedDate} />
        {addRecipeIsShown && (
          <AddRecipe dateTimeData={{ selectedDate, selectedTime }} onCloseAddRecipe={hideAddRecipeHandler} />
        )}
      </AppWrapper>
    </div>
  );
}

export default App;
