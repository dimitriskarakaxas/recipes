import React from "react";

const HourLine = ({ hour, onShowAddRecipe }) => {
  return (
    <div className="group h-1/5 relative md:flex">
      <div className="text-xs text-right mr-2 absolute top-0 left-0 z-50 md:relative md:min-w-[35px] md:bg-white">
        {hour}
      </div>
      <div className="h-full w-full bg-gray-100 border-t border-gray-300 relative group-first:border-t-0 group">
        <button
          className="bg-purple-800 w-6 h-6 text-sm text-white rounded-full flex justify-center items-center absolute top-1 right-1 md:w-auto md:h-auto md:px-6 md:py-2 outline-none md:text-base md:rounded md:top-1/2 md:-translate-y-1/2 transition-opacity duration-300 md:hover:bg-purple-900 md:opacity-0 md:group-hover:opacity-100"
          onClick={onShowAddRecipe}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HourLine;

// !!!Tailwind Notice!!!
// In this file I'm using Tailwind's "group" core feature with nesting which is not actually supported.
// BUT when "group" is set on different element states it can run very smoothly like in this example "group-first" and "group-hover".
