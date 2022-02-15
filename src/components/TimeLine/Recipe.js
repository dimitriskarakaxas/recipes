import React from "react";

const Recipe = ({ recipeData, onShowAddRecipe }) => {
  // console.log(recipeData);

  return (
    <div
      className="p-1 bg-gray-300 rounded-lg flex h-full ml-2 w-[170px] flex-shrink-0 relative cursor-pointer transition-all hover:scale-105"
      onClick={onShowAddRecipe.bind(null, recipeData.id)}
    >
      <div className="absolute inset-0 border bg-black opacity-0 rounded-lg transition-opacity hover:opacity-20"></div>
      <img
        className="object-cover max-w-full w-3/5 rounded-lg"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goulash-1640024815.jpeg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*"
        alt="Recipe"
      />
      <div className="text-sm text-right w-2/5">{recipeData.selectedRecipe}</div>
    </div>
  );
};

export default Recipe;
