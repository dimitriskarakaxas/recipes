import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onCloseModal }) => {
  return <div className="fixed inset-0 bg-[#00000055] z-[200]" onClick={onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="bg-white w-4/5 md:w-1/2 max-w-4xl p-10 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[250]">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;

// We use Portal to mount Modal in a different place in the app
