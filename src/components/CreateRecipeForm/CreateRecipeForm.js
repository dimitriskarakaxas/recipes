import React, { useState } from "react";
import { Input, Editable, EditableTextarea, EditablePreview } from "@chakra-ui/react";

import { INGREDIENTS } from "../../data/ingredients";

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
      <div className="mt-24 relative">
        <div className="flex justify-between px-2 pb-1 mb-3 border-b border-black font-bold">
          <p className="w-full">Ingredient</p>
          <p className="w-full text-center">Quantity</p>
          <p className="w-full text-right">Action</p>
        </div>
        <div>
          {INGREDIENTS.length &&
            INGREDIENTS.map((ingredient) => (
              <div key={ingredient.id} className="border-b pb-2 mb-2 border-gray-300 flex items-center justify-between">
                <div className="flex items-center w-full">
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://www.simplyrecipes.com/thmb/ea0xCeXe7pgEJKtqAzX6ulOpg28=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__02__Moms-Pork-Chops-LEAD-2-5f0b6386b5d046dfa1bf50665450dfdd.jpg"
                    alt={`Ingredient ${ingredient.title}`}
                  />
                  <p className="ml-3">{ingredient.title}</p>
                </div>
                <p className="w-full h-full text-center">{ingredient.quantity}</p>
                <div className="w-full text-right flex justify-end items-center">
                  <button className="flex py-3 cursor-pointer group">
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition group-hover:-translate-y-1 group-hover:bg-purple-700"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition ml-1 group-hover:translate-y-1 group-hover:bg-purple-700"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full transition ml-1 group-hover:-translate-y-1 group-hover:bg-purple-700"></div>
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button className="absolute left-[101%] top-[105%] -translate-y-1/2 cursor-pointer w-10 h-10 transition hover:scale-110">
          <div className="w-full h-[5px] bg-purple-700 rounded-lg absolute top-1/2 -translate-y-1/2"></div>
          <div className="w-full h-[5px] bg-purple-700 rounded-lg absolute rotate-90 top-1/2 -translate-y-1/2"></div>
        </button>
      </div>

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
