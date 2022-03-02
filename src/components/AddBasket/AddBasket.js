import React from "react";
import { Alert, AlertIcon, Input } from "@chakra-ui/react";

import DatePicker from "../DatePicker/DatePicker";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import Modal from "../UI/Modal/Modal";
import ModalButton from "../UI/Modal/ModalButton";

const AddBasket = ({ onCloseAddBasket, selectedDate, onDateChange }) => {
  const error = "hi";
  return (
    <Modal onClose={onCloseAddBasket} style={{ padding: "20px 2%", width: "95%" }}>
      <header>
        <h3 className="text-xl text-center font-bold md:text-left">Create Basket</h3>
      </header>
      <div className="mt-10 flex justify-center">
        <DatePicker selectedDate={selectedDate} onDateChange={onDateChange} />
      </div>
      <div className="mt-10">
        <Input />
      </div>

      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onCloseAddBasket}>
          Cancel
        </ModalButton>
        <ModalButton
          className="text-white bg-black mt-3 sm:mt-0 sm:ml-3"
          // onClick={shouldEdit ? editRecipeHandler : addRecipeHandler}
        >
          Save
        </ModalButton>
        <div className="flex-1 text-right"></div>
      </footer>
    </Modal>
  );
};

export default AddBasket;
