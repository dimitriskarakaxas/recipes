import React from "react";

const Recipe = ({ recipeData }) => {
  console.log(recipeData);

  return (
    <div className="flex w-[200px] p-1 bg-gray-400 rounded">
      <img
        className="object-cover max-w-full w-3/5"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goulash-1640024815.jpeg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*"
        alt="Recipe"
      />
      <div className="w-2/5 text-right">{recipeData.selectedRecipe}</div>
    </div>
  );
};

export default Recipe;
