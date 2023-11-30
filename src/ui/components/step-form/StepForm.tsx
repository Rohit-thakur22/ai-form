import React, { useState } from "react";
import { useDispatch } from "react-redux";
import glossy from "../../../assets/images/gift.jpg";
import { FormData } from "../../../libs/types/formDataType";
import { formSubmit, handleLoader } from "../../../store/reducer/formdata";
import { AppDispatch } from "../../../store/store";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useNavigate } from "react-router-dom";

const StepForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
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
    if (formData.country === "") {
      setError(true);
    } else {
      dispatch(handleLoader(true));
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(formData);
        }, 5000);
      });
      promise.then((result) => {
        dispatch(formSubmit(result));
        dispatch(handleLoader(false));
        setError(false);
        setFormData({
          buyFor: "",
          age: "",
          gender: "",
          description: "",
          occasion: "",
          gift: "",
          spendAmount: "",
          country: "",
        });
        setStep(1);
        navigate("/list");
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
