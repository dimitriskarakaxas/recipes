import React from "react";

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  removeRecipe: (id) => {},
});

export default RecipesContext;
