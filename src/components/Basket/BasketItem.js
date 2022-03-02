import React from "react";
import { Checkbox } from "@chakra-ui/react";

const BasketItem = () => {
  return (
    <div className="flex justify-between items-center font-bold text-xs md:text-sm border border-gray-300 px-2 py-4 md:px-4 rounded-md mt-1">
      <div className="w-1/3">Pork Chops</div>
      <div className="w-1/3 text-center">2 killograms</div>
      <div className="w-1/3 text-right">
        <Checkbox size="lg" />
      </div>
    </div>
  );
};

export default BasketItem;
