import React, { Fragment, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onCloseAddRecipe }) => {
  return <div className="fixed inset-0 bg-[#00000055] z-[200]" onClick={onCloseAddRecipe}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="bg-white w-4/5 md:w-1/2 max-w-4xl p-10 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[250]">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onCloseAddRecipe }) => {
  const closeOnEscapeKeyDown = useCallback(
    (event) => {
      // Close Modal on <Escape key>
      if ((event.charCode || event.keyCode) === 27) {
        onCloseAddRecipe();
      }
    },
    [onCloseAddRecipe]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseAddRecipe={onCloseAddRecipe} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;

// We use Portal to mount Modal in a different place in the app
