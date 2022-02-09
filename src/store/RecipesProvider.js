import React, { useReducer } from "react";

import RecipesContext from "./recipes-context";

const defaultRecipesState = { recipes: [] };

const recipesReducer = (state, action) => {
  if (action.type === "ADD_RECIPE") {
    const updatedRecipes = state.recipes.concat(action.recipe);
    return { recipes: updatedRecipes };
  }
  return defaultRecipesState;
};

const RecipesProvider = ({ children }) => {
  const [recipesState, dispatchRecipesAction] = useReducer(recipesReducer, defaultRecipesState);
  const addRecipeHandler = (recipe) => {
    dispatchRecipesAction({ type: "ADD_RECIPE", recipe: recipe });
  };

  const removeRecipeHandler = (id) => {};

  const recipesContext = {
    recipes: recipesState,
    addRecipe: addRecipeHandler,
    removeRecipe: removeRecipeHandler,
  };

  return <RecipesContext.Provider value={recipesContext}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
