import React, { useState } from "react";

import AppWrapper from "./components/UI/AppWrapper";
import DatePicker from "./components/DatePicker/DatePicker";
import TimeLine from "./components/TimeLine/TimeLine";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  const [addRecipeIsShown, setAddRecipeIsShown] = useState(false);

  const showAddRecipeHandler = () => {
    setAddRecipeIsShown(true);
  };

  const hideAddRecipeHandler = () => {
    setAddRecipeIsShown(false);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <AppWrapper>
        <DatePicker />
        <TimeLine onShowAddRecipe={showAddRecipeHandler} />
        {addRecipeIsShown && <AddRecipe onHideAddRecipe={hideAddRecipeHandler} />}
      </AppWrapper>
    </div>
  );
}

export default App;
