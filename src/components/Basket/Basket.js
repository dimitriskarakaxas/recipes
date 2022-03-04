import React, { useContext } from "react";

import { Accordion } from "@chakra-ui/react";

import BasketRangeList from "./BasketRangeList";
import BasketsContext from "../../store/baskets-context";

const Basket = ({ onShowAddBasket }) => {
  const basketCtx = useContext(BasketsContext);

  const renderedBaskets = basketCtx.baskets.baskets;

  return (
    <div className="mt-12">
      <header className="flex justify-between">
        <p className="font-bold text-sm">All Baskets</p>
        <p className="font-bold text-sm text-gray-400">Items Included</p>
        <p className="font-bold text-sm text-gray-400">Most Popular</p>
      </header>
      <div className="my-8">
        <Accordion allowToggle>
          {renderedBaskets.map((basket) => (
            <BasketRangeList key={basket.id} />
          ))}
        </Accordion>
      </div>
      <div className="text-right">
        <button
          className="bg-sky-500 text-white px-6 py-2 rounded-md ml-auto transition-all hover:scale-105"
          onClick={onShowAddBasket}
        >
          New Basket
        </button>
      </div>
    </div>
  );
};

export default Basket;
