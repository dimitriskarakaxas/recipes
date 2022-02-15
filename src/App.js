import React, { useState } from "react";

import AppWrapper from "./components/UI/AppWrapper";
import DatePicker from "./components/DatePicker/DatePicker";
import TimeLine from "./components/TimeLine/TimeLine";
import AddRecipe from "./components/AddRecipe/AddRecipe";

import { utils } from "react-modern-calendar-datepicker";

function App() {
  // addRecipe state controls whether the AddRecipe Modal is shown to the user
  // and whether the modal should <ADD> or <EDIT> a recipe by checking the existance of the "recipeId" key
  const [addRecipe, setAddRecipe] = useState({ isShown: false, recipeId: null });

  const [selectedDate, setSelectedDate] = useState(utils().getToday());
  const [selectedTime, setSelectedTime] = useState(null);

  const showAddRecipeHandler = (recipeId) => {
    setAddRecipe({ isShown: true, recipeId: recipeId });
  };

  const hideAddRecipeHandler = () => {
    setAddRecipe({ isShown: false });
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <AppWrapper>
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <TimeLine onTimeChange={setSelectedTime} onShowAddRecipe={showAddRecipeHandler} selectedDate={selectedDate} />
        {addRecipe.isShown && (
          <AddRecipe
            recipeId={addRecipe.recipeId}
            dateTimeData={{ selectedDate, selectedTime }}
            onCloseAddRecipe={hideAddRecipeHandler}
          />
        )}
      </AppWrapper>
    </div>
  );
}

export default App;
