import React from "react";
import { AccordionItem, AccordionButton, AccordionPanel, useMediaQuery } from "@chakra-ui/react";

import BasketItem from "./BasketItem";

const BasketRangeList = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <AccordionItem border="0" className="mt-4 first-of-type:mt-0">
      <h2>
        <AccordionButton padding={isLargerThan768 ? "" : "5px"} border="0px" className="bg-gray-100 rounded-md">
          <div className="flex flex-1 items-center text-xs md:text-sm">
            <div className="w-1/3 text-left">
              <time dateTime="" className="font-bold block md:inline-block">
                Monday 23 Dec
              </time>
              <time dateTime="" className="font-bold ml-2 md:ml-6 block md:inline-block">
                Tuesday 25 Dec
              </time>
              <div className="text-left text-xs text-gray-400 font-bold mt-1">Weekly shoping</div>
            </div>
            <div className="w-1/3 font-bold">5/54 Items</div>
            <div className="w-1/3 text-right font-bold">1 Person</div>
          </div>
        </AccordionButton>
      </h2>

      <AccordionPanel padding={0}>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default BasketRangeList;
