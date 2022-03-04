import React, { useReducer } from "react";

import BasketsContext from "./baskets-context";

const defaultBasketsState = { baskets: [] };

const basketsReducer = (state, action) => {
  if (action.type === "ADD_BASKET") {
    const updatedBaskets = state.baskets.concat(action.basket);
    return { baskets: updatedBaskets };
  }

  return defaultBasketsState;
};

const BasketsProvider = ({ children }) => {
  const [basketsState, dispatchBasketsAction] = useReducer(basketsReducer, defaultBasketsState);

  const addBasketHandler = (basket) => {
    dispatchBasketsAction({ type: "ADD_BASKET", basket: basket });
  };

  const basketsContext = {
    baskets: basketsState,
    addBasket: addBasketHandler,
  };

  return <BasketsContext.Provider value={basketsContext}>{children}</BasketsContext.Provider>;
};

export default BasketsProvider;
