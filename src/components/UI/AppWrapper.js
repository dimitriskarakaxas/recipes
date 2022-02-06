import React from "react";

const AppWrapper = (props) => {
  return <div className="w-2/3 max-w-5xl">{props.children}</div>;
};

export default AppWrapper;
