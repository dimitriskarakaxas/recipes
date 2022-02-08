import React from "react";

const ModalButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`text-white bg-black py-3 px-10 border border-black font-bold rounded-lg transition-all hover:shadow-xl hover:rounded-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ModalButton;
