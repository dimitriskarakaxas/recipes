import React, { useState } from "react";
import { Input, Editable, EditableTextarea, EditablePreview } from "@chakra-ui/react";

import { INGREDIENTS } from "../../data/ingredients";
import Ingredients from "./Ingredients";

const CreateRecipeForm = ({ setRecipeInfo }) => {
  const [preperationSteps, setPreperationSteps] = useState([{ value: "", hasFocus: false }]);

  const handleTitleInputChange = (event) => {
    setRecipeInfo((prevValue) => {
      return { ...prevValue, title: event.target.value };
    });
  };

  const handleSubtitleInputChange = (event) => {
    setRecipeInfo((prevValue) => {
      return { ...prevValue, subtitle: event.target.value };
    });
  };

  const handlePreperationTimeInputChange = (event) => {
    setRecipeInfo((prevValue) => {
      return { ...prevValue, preperationTime: event.target.value };
    });
  };

  const handleServingsInputChange = (event) => {
    setRecipeInfo((prevValue) => {
      return { ...prevValue, servings: event.target.value };
    });
  };

  const handlePreperationInputChange = (idx, newValue) => {
    setPreperationSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[idx].value = newValue;

      // User clicked <Enter> while typing the Step
      if (newValue.indexOf("\n") !== -1) {
        // Remove <New Line> indicator from the end of the string
        newSteps[idx].value = newSteps[idx].value.slice(0, -1);

        if (!preperationSteps.some((step) => step.value.trim().length === 0)) {
          newSteps[idx].hasFocus = false;
          newSteps[idx].isEdit = false;
          // Create new Editable for the new Step
          newSteps.push({ value: "", hasFocus: true });
        } else {
          newSteps[idx + 1].hasFocus = true;
          newSteps[idx + 1].isEdit = true;
        }
      }
      return newSteps;
    });
  };

  const handlePreperationInputBlur = (idx, step) => {
    if (step.hasFocus) {
      setPreperationSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        newSteps[idx].hasFocus = false;
        newSteps[idx].isEdit = false;

        // If TextArea is empy we are not creating new Step
        if (prevSteps[idx].value.trim() === "") return newSteps;
        // If There is at least one empty TextArea we are not creating new Step
        if (preperationSteps.some((step) => step.value.trim().length === 0)) return newSteps;

        // Otherwise we create new Step
        newSteps.push({ value: "", hasFocus: false });
        return newSteps;
      });
    }
  };

  const handlePreperationInputFocus = (idx) => {
    setPreperationSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[idx].hasFocus = true;
      newSteps[idx].isEdit = true;
      return newSteps;
    });
  };

  return (
    <div>
      {/* Input Section */}
      <div>
        <Input placeholder="Recipe Title" onChange={handleTitleInputChange} />
        <Input
          placeholder="Subtitle i.e hungarian traditional diss"
          className="mt-4"
          onChange={handleSubtitleInputChange}
        />
        <Input placeholder="Preperation Time" className="mt-4" onChange={handlePreperationTimeInputChange} />
        <Input placeholder="Servings" className="mt-4" onChange={handleServingsInputChange} />
      </div>

      {/* Ingredient Section */}
      <div className="mt-24">
        <Ingredients ingredients={INGREDIENTS} preview={false} />
      </div>

      {/* Preperation Steps */}
      <div className="mt-24">
        <p className="text-xl font-black">Preparation Steps</p>
        <div className="">
          {preperationSteps &&
            preperationSteps.map((step, idx) => (
              <div key={idx} className="flex items-center mt-6">
                <p className="mr-4 font-black">{idx + 1}</p>
                <div className={`${idx > 0 ? "mt-2" : ""} relative w-full`}>
                  <Editable
                    value={step.value}
                    startWithEditView={step.hasFocus}
                    className=""
                    onChange={(newValue) => {
                      handlePreperationInputChange(idx, newValue);
                    }}
                    onBlur={() => {
                      handlePreperationInputBlur(idx, step);
                    }}
                    onFocus={() => {
                      console.log("triapoulakia");
                      handlePreperationInputFocus(idx);
                    }}
                    onKeyDown={(event) => {
                      if (
                        event.target.value.trim().length === 0 &&
                        (event.key === "Backspace" || event.code === "Backspace") &&
                        preperationSteps.length > 1
                      ) {
                        setPreperationSteps((prevSteps) => {
                          const newSteps = [...prevSteps];
                          newSteps.splice(idx, 1);
                          newSteps[0].hasFocus = true;
                          newSteps[0].isEdit = true;
                          return newSteps;
                        });
                      }
                    }}
                  >
                    <EditablePreview className="w-full border p-2 border-gray-300 min-h-[3.5rem]" />
                    <EditableTextarea className="p-2" />
                  </Editable>
                  {/* {!step.isEdit && (
                    <button className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs rounded-tr-md transition-all hover:rounded-bl-md">
                      Delete
                    </button>
                  )} */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateRecipeForm;
