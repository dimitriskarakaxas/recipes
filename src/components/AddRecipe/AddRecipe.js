import React from "react";

import Modal from "../UI/Modal/Modal";
import { Select } from "@chakra-ui/react";

const AddRecipe = ({ onHideAddRecipe }) => {
  return (
    <Modal onCloseModal={onHideAddRecipe}>
      <header>
        <h3 className="text-xl text-center font-bold">Select Recipe</h3>
      </header>
      <div className="mt-12">
        <Select placeholder="Recipe Title">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </Select>
        <div className="mt-8 md:w-1/3">
          <Select placeholder="Portions">
            <option value="potion1">1 Portion</option>
            <option value="potion2">2 Portion</option>
            <option value="potion3">3 Portion</option>
            <option value="potion4">4 Portion</option>
          </Select>
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row">
        <button className="btn" onClick={onHideAddRecipe}>
          Cancel
        </button>
        <button className="btn mt-3 text-white bg-black md:mt-0 md:ml-3">Save</button>
      </div>
    </Modal>
  );
};

export default AddRecipe;
