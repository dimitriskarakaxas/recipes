import React, { useState } from "react";
import { Input, Editable, EditableTextarea, EditablePreview } from "@chakra-ui/react";

import { INGREDIENTS } from "../../data/ingredients";
import Ingredients from "./Ingredients";

const CreateRecipeForm = () => {
  const [preperationSteps, setPreperationSteps] = useState([{ value: "", hasFocus: false }]);

  console.log(preperationSteps);

  return (
    <div>
      {/* Input Section */}
      <div>
        <Input placeholder="Recipe Title" />
        <Input placeholder="Subtitle i.e hungarian traditional diss" className="mt-4" />
        <Input placeholder="Preperation Time" className="mt-4" />
        <Input placeholder="Servings" className="mt-4" />
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
                      setPreperationSteps((prevSteps) => {
                        const newSteps = [...prevSteps];
                        newSteps[idx].value = newValue;
                        // User clicked <Enter> while typing the Step
                        if (newValue.indexOf("\n") !== -1) {
                          // Remove <New Line> indicator from the end of the string
                          newSteps[idx].value = newSteps[idx].value.slice(0, -1);
                          newSteps[idx].hasFocus = false;
                          newSteps[idx].isEdit = false;
                          // Create new Editable for the new Step
                          newSteps.push({ value: "", hasFocus: true });
                        }
                        return newSteps;
                      });
                    }}
                    onBlur={() => {
                      if (step.hasFocus) {
                        setPreperationSteps((prevSteps) => {
                          const newSteps = [...prevSteps];
                          newSteps[idx].hasFocus = false;
                          newSteps[idx].isEdit = false;
                          if (step.value.trim() !== "") {
                            newSteps.push({ value: "", hasFocus: false });
                          }
                          return newSteps;
                        });
                      }
                    }}
                    onFocus={() => {
                      console.log("focused");
                      setPreperationSteps((prevSteps) => {
                        const newSteps = [...prevSteps];
                        newSteps[idx].hasFocus = true;
                        newSteps[idx].isEdit = true;
                        return newSteps;
                      });
                    }}
                  >
                    <EditablePreview className="w-full border p-2 border-gray-300 min-h-[3.5rem]" />
                    <EditableTextarea className="p-2" />
                  </Editable>
                  {!step.isEdit && (
                    <button className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs rounded-tr-md transition-all hover:rounded-bl-md">
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateRecipeForm;
