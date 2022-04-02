import React from "react";
import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";

const CreateRecipe = () => {
  return (
    <div className="flex justify-between">
      <div className="w-5/12">
        <CreateRecipeForm />
      </div>
      <div className="border border-red-300 w-5/12"></div>
    </div>
  );
};

export default CreateRecipe;
