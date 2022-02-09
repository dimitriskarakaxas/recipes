import React, { Fragment, useCallback, useEffect, useState } from "react";

import SearchableSelector from "react-select";

const RecipeSelector = ({ onRecipeChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const selectorChangeHandler = useCallback(
    (opt) => {
      onRecipeChange(opt.value);
    },
    [onRecipeChange]
  );

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://random-data-api.com/api/users/random_user?size=100");
      if (!response.ok) throw new Error("Something went wrong! Try again Later");
      const data = await response.json();
      const transformedData = data.map((d) => {
        return {
          value: d.first_name,
          label: d.first_name,
        };
      });
      setRecipes(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  let placeholder = "Choose Recipe";
  if (isLoading) placeholder = "Loading Recipes...";
  if (error) placeholder = "Failed to load Recipes:(";

  return (
    <Fragment>
      <SearchableSelector
        placeholder={placeholder}
        isLoading={isLoading}
        loadingMessage={() => "Loading Recipes..."}
        isDisabled={error}
        options={recipes}
        onChange={selectorChangeHandler}
      />
      <p
        className={`text-xs md:text-sm  text-center text-red-600 transition-opacity opacity-0 ${
          error ? "opacity-100" : ""
        }`}
      >
        Something went wrong! Try again later.
      </p>
    </Fragment>
  );
};

export default RecipeSelector;
