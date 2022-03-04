import { createContext } from "react";

const BasketsContext = createContext({
  baskets: [],
  addBasket: () => {},
});

export default BasketsContext;
