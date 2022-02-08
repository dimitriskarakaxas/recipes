import React, { Fragment, useState } from "react";

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

const PortionSelector = () => {
  const [selectedPortion, setSelectedPortion] = useState(null);

  console.log(selectedPortion);

  return (
    <Fragment>
      <Selector
        isSearchable={false}
        onChange={(opt) => {
          setSelectedPortion(opt.value);
        }}
        options={options}
      />
    </Fragment>
  );
};

export default PortionSelector;
