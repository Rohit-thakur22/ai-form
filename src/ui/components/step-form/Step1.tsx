import React from "react";
import { FormData } from "../../../libs/types/formData";

interface prop {
  formData: FormData;
  setFormData: any;
}
const Step1 = ({ formData, setFormData }: prop) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, gender: event.target.value });
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="w-full">
      <form className="px-8  mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="buyFor"
          >
            Who are you buying for?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="buyFor"
            name="buyFor"
            value={formData.buyFor}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Enter here"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="age"
          >
            How old are they?{" "}
          </label>
          <div className="flex items-center gap-3 justify-start">
            <input
              className=" w-24 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              name="age"
              type="number"
              onChange={(e) => handleChange(e)}
              value={formData.age}
              placeholder="Age"
            />
            <span className="text-lg  text-gray-800">years old</span>
          </div>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-base font-bold mb-2">
            {" "}
            They identify as:
          </label>
          <div className="w-full flex justify-between items-center mb-4 gap-4">
            <div className="border rounded-lg p-2 w-full">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              <label htmlFor="female" className="text-gray-700 mr-4">
                Female
              </label>
            </div>
            <div className="border rounded-lg p-2 w-full">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              <label htmlFor="male" className="text-gray-700 mr-4">
                Male
              </label>
            </div>
            <div className="border rounded-lg p-2 w-full">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              <label htmlFor="other" className="text-gray-700">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="description"
          >
            What do they like to do? Be specific!{" "}
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            cols={8}
            onChange={(e) => handleChange(e)}
            value={formData.description}
            placeholder="Enter interests and hobbies"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
