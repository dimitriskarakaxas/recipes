import React, { useContext, useEffect, useState } from "react";

import Modal from "../UI/Modal/Modal";
import RecipeSelector from "./RecipeSelector";
import PortionSelector from "./PortionSelector";
import ModalButton from "../UI/Modal/ModalButton";
import { Alert, AlertIcon } from "@chakra-ui/react";
import RecipesContext from "../../store/recipes-context";

const AddRecipe = ({ dateTimeData, onCloseAddRecipe }) => {
  const recipesCtx = useContext(RecipesContext);
  const [error, setError] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedPortion, setSelectedPortion] = useState(null);

  useEffect(() => {
    if (error && selectedRecipe && selectedPortion) setError(false);
  }, [error, selectedRecipe, selectedPortion]);

  const addRecipeHandler = () => {
    if (!selectedRecipe || !selectedPortion) {
      setError(true);
      return;
    }

    const userRecipe = {
      dateTimeData,
      selectedRecipe,
      selectedPortion,
    };

    recipesCtx.addRecipe(userRecipe);
    onCloseAddRecipe();
  };

  return (
    <Modal onCloseAddRecipe={onCloseAddRecipe}>
      <div
        className={`text-sm md:text-base absolute top-2 left-0 transition-transform -translate-x-full ${
          error ? "translate-x-0" : ""
        }`}
      >
        <Alert status="error" variant="left-accent" fontSize="inherit">
          <AlertIcon />
          Fill the form and try again!
        </Alert>
      </div>
      <header>
        <h3 className="text-xl text-center font-bold md:text-left">Select Recipe</h3>
      </header>
      <div className="mt-10">
        <div>
          <RecipeSelector onRecipeChange={setSelectedRecipe} />
        </div>
        <div className="mt-4 md:w-2/5">
          <PortionSelector onPortionChange={setSelectedPortion} />
        </div>
      </div>
      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onCloseAddRecipe}>
          Cancel
        </ModalButton>
        <ModalButton className="text-white bg-black mt-3 sm:mt-0 sm:ml-3" onClick={addRecipeHandler}>
          Save
        </ModalButton>
      </footer>
    </Modal>
  );
};

export default AddRecipe;
