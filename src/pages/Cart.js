import React, { Fragment, useState } from "react";
import CartHeader from "../components/CartHeader/CartHeader";
import Basket from "../components/Basket/Basket";
import WasteEfficiency from "../components/WasteEfficiency/WasteEfficiency";
import AddBasket from "../components/AddBasket/AddBasket";

const Cart = () => {
  const [addBasketIsShown, setAddBasketIsShown] = useState(false);

  const showAddBasketHandler = () => {
    setAddBasketIsShown(true);
  };

  const hideAddBasketHandler = () => {
    setAddBasketIsShown(false);
  };

  return (
    <Fragment>
      <CartHeader />
      <WasteEfficiency />
      <Basket onShowAddBasket={showAddBasketHandler} />
      {addBasketIsShown && <AddBasket onCloseAddBasket={hideAddBasketHandler} />}
    </Fragment>
  );
};

export default Cart;
