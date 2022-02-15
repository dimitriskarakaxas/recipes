import React, { useReducer } from "react";

import RecipesContext from "./recipes-context";

const defaultRecipesState = { recipes: [] };

const recipesReducer = (state, action) => {
  if (action.type === "ADD_RECIPE") {
    const updatedRecipes = state.recipes.concat(action.recipe);
    return { recipes: updatedRecipes };
  }

  if (action.type === "REMOVE_RECIPE") {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== action.id);
    return { recipes: updatedRecipes };
  }

  if (action.type === "EDIT_RECIPE") {
    const updatedRecipes = [...state.recipes];
    const existingRecipeIdx = updatedRecipes.findIndex((recipe) => recipe.id === action.id);
    console.log(updatedRecipes[existingRecipeIdx]);
    updatedRecipes[existingRecipeIdx] = {
      ...updatedRecipes[existingRecipeIdx],
      selectedRecipe: action.recipeData.selectedRecipe,
      selectedPortion: action.recipeData.selectedPortion,
    };
    return { recipes: updatedRecipes };
  }

  return defaultRecipesState;
};

const RecipesProvider = ({ children }) => {
  const [recipesState, dispatchRecipesAction] = useReducer(recipesReducer, defaultRecipesState);
  const addRecipeHandler = (recipe) => {
    dispatchRecipesAction({ type: "ADD_RECIPE", recipe: recipe });
  };

  const removeRecipeHandler = (id) => {
    dispatchRecipesAction({ type: "REMOVE_RECIPE", id: id });
  };

  const editRecipeHandler = (id, recipeData) => {
    dispatchRecipesAction({ type: "EDIT_RECIPE", id: id, recipeData: recipeData });
  };

  const recipesContext = {
    recipes: recipesState,
    addRecipe: addRecipeHandler,
    removeRecipe: removeRecipeHandler,
    editRecipe: editRecipeHandler,
  };

  return <RecipesContext.Provider value={recipesContext}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
