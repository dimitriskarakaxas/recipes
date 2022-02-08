import React from "react";

import Select from "react-select";

const aquaticCreatures = [
  { label: "Shark", value: "Shark" },
  { label: "Dolphin", value: "Dolphin" },
  { label: "Whale", value: "Whale" },
  { label: "Octopus", value: "Octopus" },
  { label: "Crab", value: "Crab" },
  { label: "Lobster", value: "Lobster" },
];

const SearchableSelect = () => {
  return <Select options={aquaticCreatures}></Select>;
};

export default SearchableSelect;
