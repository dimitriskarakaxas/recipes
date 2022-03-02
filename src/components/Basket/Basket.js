import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useMediaQuery,
  Checkbox,
} from "@chakra-ui/react";

const Basket = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <div className="mt-12">
      <header className="flex justify-between">
        <p className="font-bold text-sm">All Baskets</p>
        <p className="font-bold text-sm text-gray-400">Items Included</p>
        <p className="font-bold text-sm text-gray-400">Most Popular</p>
      </header>
      <div className="my-8">
        <Accordion allowToggle>
          <AccordionItem border="0">
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
              <div className="flex justify-between items-center font-bold text-xs md:text-sm border border-gray-300 px-2 py-4 md:px-4 rounded-md mt-1">
                <div className="w-1/3">Pork Chops</div>
                <div className="w-1/3 text-center">2 killograms</div>
                <div className="w-1/3 text-right">
                  <Checkbox size="lg" />
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
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
