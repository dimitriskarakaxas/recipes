import React from "react";
import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";
import RecipePreview from "../components/RecipePreview/RecipePreview";

const CreateRecipe = () => {
  return (
    <div className="flex justify-between">
      <div className="w-5/12">
        <CreateRecipeForm />
      </div>
      <div className="w-5/12">
        <RecipePreview />
      </div>
    </div>
  );
};

export default CreateRecipe;
