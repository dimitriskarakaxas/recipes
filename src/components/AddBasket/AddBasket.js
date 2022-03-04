import React, { useState, useContext } from "react";
import { Alert, AlertIcon, Input, useMediaQuery } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import DatePicker from "../DatePicker/DatePicker";
import Modal from "../UI/Modal/Modal";
import ModalButton from "../UI/Modal/ModalButton";
import BasketsContext from "../../store/baskets-context";

const AddBasket = ({ onCloseAddBasket }) => {
  const basketsCtx = useContext(BasketsContext);
  const [selectedDate, setSelectedDate] = useState({ from: null, to: null });
  const [titleInputValue, setTitleInputValue] = useState("");
  const [error, setError] = useState(false);
  const [isLargerThan900] = useMediaQuery("(min-width: 901px)");

  const handleTitleInputChange = (event) => {
    setTitleInputValue(event.target.value);
  };

  const modalStyles = {
    width: isLargerThan900 ? "" : "90%",
    paddingLeft: isLargerThan900 ? "" : "15px",
    paddingRight: isLargerThan900 ? "" : "15px",
  };

  const addBasketHandler = () => {
    if ((!selectedDate.from && !selectedDate.to) || titleInputValue.trim().length === 0) {
      setError(true);
      return;
    }

    const userBasket = {
      id: uuidv4(),
      title: titleInputValue,
      dateData: selectedDate,
    };

    basketsCtx.addBasket(userBasket);
    onCloseAddBasket();
  };

  return (
    <Modal onClose={onCloseAddBasket} style={modalStyles}>
      <header>
        <h3 className="text-xl text-center font-bold md:text-left">Create Basket</h3>
      </header>
      <div className="mt-10 flex justify-center">
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} calendarClassName="addBasket-calendar" />
      </div>
      <div className="mt-10">
        <Input placeholder="Title" value={titleInputValue} onChange={handleTitleInputChange} size="lg" />
      </div>

      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onCloseAddBasket}>
          Cancel
        </ModalButton>
        <ModalButton className="text-white bg-black mt-3 sm:mt-0 sm:ml-3" onClick={addBasketHandler}>
          Save
        </ModalButton>
        <div className="absolute top-2 left-0 overflow-hidden">
          <div
            className={`text-sm md:text-base transition-transform -translate-x-full ${error ? "translate-x-0" : ""}`}
          >
            <Alert status="error" variant="left-accent" fontSize="inherit">
              <AlertIcon />
              Fill the form and try again!
            </Alert>
          </div>
        </div>
      </footer>
    </Modal>
  );
};

export default AddBasket;
