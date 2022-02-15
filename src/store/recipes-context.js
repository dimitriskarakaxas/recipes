import React from "react";

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  removeRecipe: (id) => {},
  editRecipe: (id, recipeData) => {},
});

export default RecipesContext;
