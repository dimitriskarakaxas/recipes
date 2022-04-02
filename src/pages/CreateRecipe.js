import React, { useState } from "react";
import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";
import RecipePreview from "../components/RecipePreview/RecipePreview";

const CreateRecipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    subtitle: "",
    preperationTime: "",
    servings: "",
  });

  console.log(recipeInfo);

  return (
    <div className="flex justify-between">
      <div className="w-5/12">
        <CreateRecipeForm setRecipeInfo={setRecipeInfo} />
      </div>
      <div className="w-5/12">
        <RecipePreview recipeInfo={recipeInfo} />
      </div>
    </div>
  );
};

export default CreateRecipe;
