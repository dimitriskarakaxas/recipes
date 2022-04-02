import React, { Fragment, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className="fixed inset-0 bg-[#00000055] z-[200]" onClick={onClose}></div>;
};

const ModalOverlay = ({ children, style }) => {
  return (
    <div
      style={style}
      className="bg-white w-4/5 md:w-2/3 max-w-3xl px-10 py-16 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[250]"
    >
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClose, style }) => {
  const closeOnEscapeKeyDown = useCallback(
    (event) => {
      // Close Modal on <Escape key>
      if ((event.charCode || event.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay style={style}>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;

// We use Portal to mount Modal in a different place in the app
