import React, { Fragment, useState } from "react";

import DatePicker from "../components/DatePicker/DatePicker";
import TimeLine from "../components/TimeLine/TimeLine";
import AddRecipe from "../components/AddRecipe/AddRecipe";

import { utils } from "@hassanmojab/react-modern-calendar-datepicker";

const Home = () => {
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
    <Fragment>
      <div className="xl:flex md:justify-between items-center">
        <div className="w-fit mx-auto">
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            calendarClassName="home-page-calendar"
          />
        </div>
        <TimeLine onTimeChange={setSelectedTime} onShowAddRecipe={showAddRecipeHandler} selectedDate={selectedDate} />
      </div>
      {addRecipe.isShown && (
        <AddRecipe
          recipeId={addRecipe.recipeId}
          dateTimeData={{ selectedDate, selectedTime }}
          onCloseAddRecipe={hideAddRecipeHandler}
        />
      )}
    </Fragment>
  );
};

export default Home;
