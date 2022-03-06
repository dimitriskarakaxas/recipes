import React from "react";

const CartHeader = () => {
  return (
    <header className="flex justify-between md:justify-end">
      <div className="hoverable bg-gray-100 flex rounded-md items-center px-4 py-2 sm:px-8 sm:py-4 cursor-pointer">
        {/* <div className="bg-gray-100 flex md:px-8 md:py-4 rounded-md items-center cursor-pointer md:transition-all md:hover:scale-[1.01] md:hover:shadow-xl"> */}
        <p className="text-3xl sm:text-5xl mr-4">11</p>
        <p className="text-sm sm:text-base">
          Items
          <br /> In inventory
        </p>
      </div>
      <div className="hoverable bg-gray-100 flex rounded-md items-center px-4 py-3 sm:px-8 sm:py-4 ml-2 md:ml-4 cursor-pointer">
        <p className="text-3xl sm:text-5xl mr-4">4</p>
        <p className="text-sm sm:text-base">
          Probable
          <br /> Close due dates
        </p>
      </div>
    </header>
  );
};

export default CartHeader;
