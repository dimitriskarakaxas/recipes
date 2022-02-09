import React, { useContext } from "react";

import RecipesContext from "../../store/recipes-context";
import Recipe from "./Recipe";

const HourLine = ({ hour, onTimeChange, onShowAddRecipe, selectedDate }) => {
  const recipesCtx = useContext(RecipesContext);

  const recipes = recipesCtx.recipes.recipes;

  // Find which recipes should be rendered in the current HourLine based on the recipes which are stored in recipesCtx and the selectedDate the user selected
  const renderedRecipes = recipes.filter((recipe) => {
    const { dateTimeData } = recipe;
    return (
      dateTimeData.selectedDate.year === selectedDate.year &&
      dateTimeData.selectedDate.month === selectedDate.month &&
      dateTimeData.selectedDate.day === selectedDate.day &&
      dateTimeData.selectedTime === hour
    );
  });

  const addButtonClickHandler = () => {
    onTimeChange(hour);
    onShowAddRecipe();
  };

  return (
    <div className="group h-1/5 relative flex md:flex">
      <div className="text-[9px] text-center w-[4ch] md:text-right md:pr-2 md:text-xs md:min-w-[50px] md:bg-gray-200">
        {hour}
      </div>

      <div className="h-full w-full bg-gray-100 border-t border-gray-300 flex items-center relative group-first:border-t-0 group">
        {renderedRecipes &&
          renderedRecipes.length > 0 &&
          renderedRecipes.map((recipe) => <Recipe recipeData={recipe} />)}
        <button
          className="bg-purple-800 w-6 h-6 text-sm text-white rounded-full flex justify-center items-center absolute top-1/2 right-1 -translate-y-1/2 md:w-auto md:h-auto md:px-6 md:py-2 outline-none md:text-base md:rounded md:top-1/2 md:-translate-y-1/2 transition-opacity duration-300 md:hover:bg-purple-900 md:opacity-0 md:group-hover:opacity-100"
          onClick={addButtonClickHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HourLine;

// !!!Tailwind Notice!!!
// In this file I'm using Tailwind's "group" core feature with nesting which is not actually supported.
// BUT when "group" is set on different element states it can run very smoothly like in this example "group-first" and "group-hover".
