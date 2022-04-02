import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CreateRecipe from "./pages/CreateRecipe";
import AppWrapper from "./components/UI/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
