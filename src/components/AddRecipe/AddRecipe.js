import React from "react";

import Modal from "../UI/Modal/Modal";
import RecipeSelector from "./RecipeSelector";
import PortionSelector from "./PortionSelector";
import ModalButton from "../UI/Modal/ModalButton";

const AddRecipe = ({ onCloseAddRecipe }) => {
  return (
    <Modal onCloseAddRecipe={onCloseAddRecipe}>
      <header>
        <h3 className="text-xl text-center font-bold md:text-left">Select Recipe</h3>
      </header>
      <div className="mt-10">
        <div>
          <RecipeSelector />
        </div>
        <div className="mt-4 md:w-2/5">
          <PortionSelector />
        </div>
      </div>
      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onCloseAddRecipe}>
          Cancel
        </ModalButton>
        <ModalButton className="mt-3 sm:mt-0 sm:ml-3">Save</ModalButton>
      </footer>
    </Modal>
  );
};

export default AddRecipe;
