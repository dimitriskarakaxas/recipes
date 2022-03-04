import React, { Fragment, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import MaterialCheck from "../MaterialCheck/MaterialCheck";

const BasketItem = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [materialCheckIsShown, setMaterialCheckIsShown] = useState(false);

  const showMaterialCheckHandler = () => {
    setMaterialCheckIsShown(true);
  };

  const hideMaterialCheckHandler = () => {
    setMaterialCheckIsShown(false);
  };

  const saveMaterialInfoHandler = () => {
    hideMaterialCheckHandler();
    setIsChecked(true);
  };

  const checkboxClickHandler = () => {
    if (!isChecked) {
      showMaterialCheckHandler();
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center font-bold text-xs md:text-sm border border-gray-300 px-2 py-4 md:px-4 rounded-md mt-1">
        <div className="w-1/3">Pork Chops</div>
        <div className="w-1/3 text-center">2 killograms</div>
        <div className="w-1/3 text-right">
          <Checkbox size="lg" isChecked={isChecked} onChange={checkboxClickHandler} />
        </div>
      </div>
      {materialCheckIsShown && <MaterialCheck onClose={hideMaterialCheckHandler} onSave={saveMaterialInfoHandler} />}
    </Fragment>
  );
};

export default BasketItem;
