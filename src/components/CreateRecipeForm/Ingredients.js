import React from "react";

const Ingredients = ({ ingredients, preview = true }) => {
  return (
    <div className="relative">
      <div className="flex justify-between px-2 pb-1 mb-3 border-b border-black font-bold">
        <p className="w-full">Ingredient</p>
        <p className={`w-full ${preview ? "text-right" : "text-center"}`}>Quantity</p>
        {!preview && <p className="w-full text-right">Action</p>}
      </div>
      <div>
        {ingredients.length &&
          ingredients.map((ingredient) => (
            <div key={ingredient.id} className="border-b pb-2 mb-2 border-gray-300 flex items-center justify-between">
              <div className="flex items-center w-full">
                <img
                  className="w-12 h-12 object-cover"
                  src="https://www.simplyrecipes.com/thmb/ea0xCeXe7pgEJKtqAzX6ulOpg28=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__02__Moms-Pork-Chops-LEAD-2-5f0b6386b5d046dfa1bf50665450dfdd.jpg"
                  alt={`Ingredient ${ingredient.title}`}
                />
                <p className="ml-3">{ingredient.title}</p>
              </div>
              <p className={`w-full h-full ${preview ? "text-right" : "text-center"}`}>{ingredient.quantity}</p>
              {!preview && (
                <div className={"w-full flex justify-end items-center"}>
                  <button className="flex py-3 cursor-pointer group">
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition group-hover:translate-y-1 group-hover:bg-purple-700"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition ml-1 group-hover:-translate-y-1 group-hover:bg-purple-700"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition ml-1 group-hover:translate-y-1 group-hover:bg-purple-700"></div>
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      {!preview && (
        <button className="absolute left-[101%] top-[105%] -translate-y-1/2 cursor-pointer w-10 h-10 transition hover:scale-110">
          <div className="w-full h-[5px] bg-purple-700 rounded-lg absolute top-1/2 -translate-y-1/2"></div>
          <div className="w-full h-[5px] bg-purple-700 rounded-lg absolute rotate-90 top-1/2 -translate-y-1/2"></div>
        </button>
      )}
    </div>
  );
};

export default Ingredients;
