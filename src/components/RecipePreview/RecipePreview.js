import React from "react";

import { BiTimeFive as ClockIcon } from "react-icons/bi";
import { MdShoppingBasket as ShoppingBaskIcon } from "react-icons/md";
import { AiOutlineHeart as HeartIcon } from "react-icons/ai";

import Ingredients from "../CreateRecipeForm/Ingredients";
import { INGREDIENTS } from "../../data/ingredients";

const RecipePreview = ({ recipeInfo }) => {
  const { title, subtitle, preparationTime, servings } = recipeInfo;

  return (
    <div className="flex flex-col">
      <div className="h-72">
        <img
          src="https://assets.epicurious.com/photos/5aa01240bb8d8278146573fc/master/pass/creamy-shrimp-risotto-with-mascarpone-recipe-BA-030718.jpg"
          className="h-full w-full object-cover"
          alt={`Recipe`}
        />
      </div>
      <div className="h-96 bg-white rounded-3xl -mt-5 relative z-2">
        {/* Title */}
        <div className="bg-white absolute left-6 top-0 -translate-y-1/2 shadow-xl rounded-[500px] px-4 py-2">
          <h2 className="text-xl font-black text-gray-800">{title.length ? title : "Title goes here"}</h2>
          <p className="text-sm text-gray-500">{subtitle.length ? subtitle : "Subtitle goes here"}</p>
        </div>

        {/* Like */}
        <div className="absolute right-6 top-0 rounded-full -translate-y-1/2 shadow-md">
          <div className="border-2 border-red-500 rounded-full p-2 bg-white cursor-pointer">
            <HeartIcon className="text-red-500 text-2xl" />
          </div>
        </div>

        {/* Info */}
        <div className="mt-14 w-4/5 mx-auto overflow-hidden">
          <div className="flex justify-between">
            <p className="font-bold">Preparation time</p>
            <div className="flex w-[25%]">
              <ClockIcon className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 ml-2">{preparationTime.length ? preparationTime : "Preparation"}</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold">Cooking time</p>
            <div className="flex w-[25%]">
              <ClockIcon className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 ml-2">30 min</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold">Servings</p>
            <div className="flex w-[25%]">
              <ShoppingBaskIcon className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 ml-2">{servings.length ? servings : "Servings"}</p>
            </div>
          </div>
        </div>

        {/* Inredients */}
        <div className="mt-14">
          <Ingredients ingredients={INGREDIENTS} />
        </div>

        {/* Description */}
        <div className="mt-14">
          <p className="text-xl text-gray-600 font-black mb-6">Description</p>
          <div className="flex items-center">
            <p className="text-3xl font-black">1</p>
            <p className="ml-8 text-gray-500">
              Our Fried Rice is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables,
              Rescued.
            </p>
          </div>
          <div className="flex items-center mt-6">
            <p className="text-3xl font-black">2</p>
            <p className="ml-8 text-gray-500">
              Our Fried Rice is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables,
              Rescued.
            </p>
          </div>
          <div className="flex items-center mt-6">
            <p className="text-3xl font-black">3</p>
            <p className="ml-8 text-gray-500">
              Our Fried Rice is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables,
              Rescued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
