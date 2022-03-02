import React, { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Modal from "../UI/Modal/Modal";
import RecipeSelector from "./RecipeSelector";
import PortionSelector from "./PortionSelector";
import ModalButton from "../UI/Modal/ModalButton";
import { Alert, AlertIcon } from "@chakra-ui/react";
import RecipesContext from "../../store/recipes-context";

const AddRecipe = ({ recipeId, dateTimeData, onCloseAddRecipe }) => {
  const recipesCtx = useContext(RecipesContext);
  const [error, setError] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedPortion, setSelectedPortion] = useState(null);

  useEffect(() => {
    if (error && selectedRecipe && selectedPortion) setError(false);
  }, [error, selectedRecipe, selectedPortion]);

  // Convert value to boolean
  const shouldEdit = !!recipeId;

  let recipeData = {};
  if (shouldEdit) {
    recipeData = recipesCtx.recipes.recipes.find((recipe) => recipe.id === recipeId);
  }

  const addRecipeHandler = () => {
    if (!selectedRecipe || !selectedPortion) {
      setError(true);
      return;
    }

    const userRecipe = {
      id: uuidv4(),
      dateTimeData,
      selectedRecipe,
      selectedPortion,
    };

    recipesCtx.addRecipe(userRecipe);
    onCloseAddRecipe();
  };

  const editRecipeHandler = () => {
    if (!selectedRecipe || !selectedPortion) {
      setError(true);
      return;
    }

    const newData = { selectedRecipe, selectedPortion };

    recipesCtx.editRecipe(recipeId, newData);
    onCloseAddRecipe();
  };

  const deleteRecipeHandler = () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    recipesCtx.removeRecipe(recipeId);
    onCloseAddRecipe();
  };

  return (
    <Modal onClose={onCloseAddRecipe}>
      <header>
        <h3 className="text-xl text-center font-bold md:text-left">Select Recipe</h3>
      </header>
      <div className="mt-10">
        <div>
          <RecipeSelector
            editMode={shouldEdit}
            defaultValue={recipeData.selectedRecipe}
            onRecipeChange={setSelectedRecipe}
          />
        </div>
        <div className="mt-4 md:w-2/5">
          <PortionSelector
            editMode={shouldEdit}
            defaultValue={recipeData.selectedPortion}
            onPortionChange={setSelectedPortion}
          />
        </div>
      </div>
      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onCloseAddRecipe}>
          Cancel
        </ModalButton>
        <ModalButton
          className="text-white bg-black mt-3 sm:mt-0 sm:ml-3"
          onClick={shouldEdit ? editRecipeHandler : addRecipeHandler}
        >
          Save
        </ModalButton>

        {shouldEdit && (
          <div className="flex-1 text-right">
            <ModalButton
              className="text-white bg-red-600 border-red-600 w-full mt-3 sm:mt-0 sm:w-auto"
              onClick={deleteRecipeHandler}
            >
              Delete
            </ModalButton>
          </div>
        )}
      </footer>
      <div className="absolute top-2 left-0 overflow-hidden">
        <div className={`text-sm md:text-base transition-transform -translate-x-full ${error ? "translate-x-0" : ""}`}>
          <Alert status="error" variant="left-accent" fontSize="inherit">
            <AlertIcon />
            Fill the form and try again!
          </Alert>
        </div>
      </div>
    </Modal>
  );
};

export default AddRecipe;
