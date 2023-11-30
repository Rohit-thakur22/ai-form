import { FormData } from "../../../libs/types/formData";
interface prop {
  formData: FormData;
  setFormData: any;
  error: Boolean;
}
const Step2 = ({ formData, setFormData, error }: prop) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
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
            htmlFor="occasion"
          >
            What's the occasion?{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="occasion"
            name="occasion"
            type="text"
            value={formData.occasion}
            onChange={(e) => handleChange(e)}
            placeholder="Enter here"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="gift"
          >
            What type of a gift would you like?{" "}
          </label>
          <select
            className=" w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gift"
            name="gift"
            value={formData.gift}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="Thoughtful">Thoughtful</option>
            <option value="Practical">Practical</option>
            <option value="Funny">Funny</option>
            <option value="Romantic">Romantic</option>
            <option value="Sentimental">Sentimental</option>
            <option value="Entertaining">Entertaining</option>
          </select>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-base font-bold mb-2">
            {" "}
            What’s the maximum you’re willing to spend?{" "}
          </label>
          <div className="w-full flex justify-start items-center mb-4 gap-4">
            <div className="border rounded-lg p-2 ">
              <label htmlFor="max-value" className="text-gray-700 mr-4">
                USD
              </label>
            </div>
            <input
              type="number"
              id="spendAmount"
              onChange={(e) => handleChange(e)}
              name="spendAmount"
              value={formData.spendAmount}
              placeholder="Amount"
              className="w-28 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="country"
          >
            What country should we return the results for?{" "}
          </label>
          <select
            required
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline ${
              error ? "outline-1 border-red-600" : ""
            }`}
            id="country"
            onChange={(e) => handleChange(e)}
            name="country"
            value={formData.country}
            placeholder="Enter interests and hobbies"
          >
            <option value="United States">United States</option>
            <option value="India">India</option>
          </select>
        </div>
        {error && (
          <p className="w-full text-center text-red-600">
            You need to answer all questions before continuing.
          </p>
        )}
      </form>
    </div>
  );
};

export default Step2;
