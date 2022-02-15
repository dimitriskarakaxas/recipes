import React, { Fragment, useCallback, useEffect } from "react";

import Selector from "react-select";

const options = [
  { value: 1, label: "1 portion" },
  { value: 2, label: "2 portions" },
  { value: 3, label: "3 portions" },
  { value: 4, label: "4 portions" },
  { value: 5, label: "5 portions" },
  { value: 6, label: "6 portions" },
  { value: 7, label: "7 portions" },
  { value: 8, label: "8 portions" },
];

const PortionSelector = ({ editMode, defaultValue, onPortionChange }) => {
  let defaultOptionIdx;
  if (editMode) {
    defaultOptionIdx = options.findIndex((option) => option.value === defaultValue);
  }

  useEffect(() => {
    if (editMode) onPortionChange(options[defaultOptionIdx].value);
  }, [editMode, onPortionChange, defaultOptionIdx]);

  const selectorChangeHandler = useCallback(
    (opt) => {
      onPortionChange(opt.value);
    },
    [onPortionChange]
  );

  return (
    <Fragment>
      <Selector
        defaultValue={options[defaultOptionIdx]}
        isSearchable={false}
        placeholder="Select Portions"
        onChange={selectorChangeHandler}
        options={options}
      />
    </Fragment>
  );
};

export default PortionSelector;
