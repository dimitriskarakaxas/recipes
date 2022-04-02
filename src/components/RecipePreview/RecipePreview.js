import React from "react";

import { BiTimeFive as ClockIcon } from "react-icons/bi";
import { MdShoppingBasket as ShoppingBaskIcon } from "react-icons/md";
import { AiOutlineHeart as HeartIcon } from "react-icons/ai";

const RecipePreview = () => {
  return (
    <div className="flex flex-col">
      <div className="h-72">
        <img
          src="https://assets.epicurious.com/photos/5aa01240bb8d8278146573fc/master/pass/creamy-shrimp-risotto-with-mascarpone-recipe-BA-030718.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-96 bg-white rounded-3xl -mt-5 relative z-2">
        {/* Title */}
        <div className="bg-white absolute left-6 top-0 -translate-y-1/2 shadow-xl rounded-[500px] px-4 py-2">
          <h2 className="text-xl font-black text-gray-800">Fried Rice</h2>
          <p className="text-sm text-gray-500">Pista House, Kukatpally</p>
        </div>

        {/* Like */}
        <div className="absolute right-6 top-0 rounded-full -translate-y-1/2 shadow-md">
          <div className="border-2 border-red-500 rounded-full p-2 bg-white cursor-pointer">
            <HeartIcon className="text-red-500 text-2xl" />
          </div>
        </div>

        {/* Info */}
        <div className="mt-14 w-4/5 mx-auto">
          <div className="flex justify-between">
            <p className="font-bold">Preperation time</p>
            <div className="flex w-[25%]">
              <ClockIcon className="text-red-400" />
              <p className="text-sm text-gray-600 ml-2">30 min</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold">Cooking time</p>
            <div className="flex w-[25%]">
              <ClockIcon className="text-red-400" />
              <p className="text-sm text-gray-600 ml-2">30 min</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold">Servings</p>
            <div className="flex w-[25%]">
              <ShoppingBaskIcon className="text-red-400" />
              <p className="text-sm text-gray-600 ml-2">4 servings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
