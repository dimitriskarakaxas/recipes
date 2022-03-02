import React from "react";

import { Accordion } from "@chakra-ui/react";

import BasketRangeList from "./BasketRangeList";

const Basket = () => {
  return (
    <div className="mt-12">
      <header className="flex justify-between">
        <p className="font-bold text-sm">All Baskets</p>
        <p className="font-bold text-sm text-gray-400">Items Included</p>
        <p className="font-bold text-sm text-gray-400">Most Popular</p>
      </header>
      <div className="my-8">
        <Accordion allowToggle>
          <BasketRangeList />
          <BasketRangeList />
          <BasketRangeList />
          <BasketRangeList />
        </Accordion>
      </div>
      <div className="text-right">
        <button className="bg-sky-500 text-white px-6 py-2 rounded-md ml-auto transition-all hover:scale-105">
          New Basket
        </button>
      </div>
    </div>
  );
};

export default Basket;
