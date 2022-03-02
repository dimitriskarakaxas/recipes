import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const WasteEfficiency = () => {
  return (
    <div className="bg-gray-100 p-2 flex items-center justify-between rounded-md md:w-fit md:transition-all md:hover:scale-[1.01] md:hover:shadow-xl">
      <div className="bg-white w-20 h-20 rounded-md flex-shrink-0"></div>
      <div className="md:ml-8">
        <h2 className="text-black font-bold md:text-xl">Waste Efficiency</h2>
        <p className="text-gray-500">Last Week</p>
      </div>
      <div>
        <CircularProgress value={83} size="55px" thickness="6px" color="gray.500" className="md:ml-24">
          <CircularProgressLabel>83%</CircularProgressLabel>
        </CircularProgress>
      </div>
    </div>
  );
};

export default WasteEfficiency;
