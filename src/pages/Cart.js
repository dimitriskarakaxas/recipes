import React, { Fragment, useState } from "react";
import Basket from "../components/Basket/Basket";
import WasteEfficiency from "../components/WasteEfficiency/WasteEfficiency";
import AddBasket from "../components/AddBasket/AddBasket";

const Cart = () => {
  const [addBasketIsShown, setAddBasketIsShown] = useState(false);

  const [selectedDateRange, setSelectedDateRange] = useState({ from: null, to: null });

  const showAddBasketHandler = () => {
    setAddBasketIsShown(true);
  };

  const hideAddBasketHandler = () => {
    setAddBasketIsShown(false);
  };

  return (
    <Fragment>
      <WasteEfficiency />
      <Basket onShowAddBasket={showAddBasketHandler} />
      {addBasketIsShown && (
        <AddBasket
          onCloseAddBasket={hideAddBasketHandler}
          selectedDate={selectedDateRange}
          onDateChange={setSelectedDateRange}
        />
      )}
    </Fragment>
  );
};

export default Cart;
