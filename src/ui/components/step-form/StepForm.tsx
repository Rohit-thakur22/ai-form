import React, { useState } from "react";
import Step1 from "./Step1";
import glossy from "../../../assets/images/gift.jpg";
import Step2 from "./Step2";
import { FormData } from "../../../libs/types/formData";

const StepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    buyFor: "",
    age: "",
    gender: "",
    description: "",
    occasion: "",
    gift: "",
    spendAmount: "",
    country: "",
  });

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step >= 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (formData.country == "") {
      setError(true);
    } else {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Resolved after 5 seconds");
        }, 5000);
      });
      promise.then((result) => {
        setError(false);
        alert("done");
        console.log(formData);
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-2 space-y-8">
      <div className="w-full flex flex-col items-center">
        <img src={glossy} alt="gift" className="w-24" />
        {step === 1 && (
          <h3 className="text-4xl font-semibold text-gray-800 w-full  text-center">
            Tell us about your gift recipient{" "}
          </h3>
        )}
        {step === 2 && (
          <h3 className="text-4xl font-semibold text-gray-800 w-full  text-center">
            Help us find the right gift!{" "}
          </h3>
        )}
      </div>
      <div>
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && (
          <Step2 formData={formData} setFormData={setFormData} error={error} />
        )}
      </div>
      <div className=" w-full flex justify-between gap-4">
        <button
          onClick={prevStep}
          className="w-full px-4 py-2 bg-gray-300 rounded-lg"
          disabled={step <= 1 ? true : false}
        >
          Back
        </button>
        {step === 1 && (
          <button
            onClick={nextStep}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
            disabled={step >= 2 ? true : false}
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-pink-600 text-white rounded-lg"
          >
            Generate Gift Ideas
          </button>
        )}
      </div>
      <div className="flex w-full justify-center">
        <span className="text-gray-800">Step {step} / 2</span>
      </div>
    </div>
  );
};

export default StepForm;
