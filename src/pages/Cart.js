import React, { Fragment } from "react";
import Basket from "../components/Basket/Basket";

import WasteEfficiency from "../components/WasteEfficiency/WasteEfficiency";

const Cart = () => {
  return (
    <Fragment>
      <WasteEfficiency />
      <Basket />
    </Fragment>
  );
};

export default Cart;
