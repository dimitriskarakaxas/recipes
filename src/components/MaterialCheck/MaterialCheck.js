import React, { useState } from "react";
import { Input, Select, Alert, AlertIcon } from "@chakra-ui/react";
import Modal from "../UI/Modal/Modal";
import ModalButton from "../UI/Modal/ModalButton";

const MaterialCheck = ({ onClose, onSave }) => {
  const [error, setError] = useState(false);
  const [expirationDaysInputValue, setExpirationDaysInputValue] = useState("");
  const [quantityInputValue, setQuantityInputValue] = useState("");

  const handleExpirationDaysInputChange = (event) => {
    setExpirationDaysInputValue(event.target.value);
  };

  const handleQuantityInputChange = (event) => {
    setQuantityInputValue(event.target.value);
  };

  const saveMaterialInfoHandler = () => {
    // if (expirationDaysInputValue.trim().length === 0 || quantityInputValue.trim().length === 0) {
    //   console.log("hi");
    //   setError(true);
    //   return;
    // }

    onSave();
  };

  return (
    <Modal onClose={onClose}>
      <div className="">
        <Input
          placeholder="Expiration in days"
          _placeholder={{ color: "#000" }}
          value={expirationDaysInputValue}
          onChange={handleExpirationDaysInputChange}
          size="lg"
        />
      </div>
      <div className="mt-8">
        <Select placeholder="Measurement Unit">
          <option value="kg">kg</option>
          <option value="ml">ml</option>
        </Select>
      </div>
      <div className="mt-8">
        <Input
          placeholder="Quantity"
          value={quantityInputValue}
          onChange={handleQuantityInputChange}
          size="lg"
          _placeholder={{ color: "#000" }}
        />
      </div>

      <footer className="mt-10 flex flex-col sm:flex-row">
        <ModalButton className="text-black bg-white" onClick={onClose}>
          Cancel
        </ModalButton>
        <ModalButton className="text-white bg-black mt-3 sm:mt-0 sm:ml-3" onClick={saveMaterialInfoHandler}>
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

export default MaterialCheck;
