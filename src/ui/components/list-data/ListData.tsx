import DataCards from "./DataCards";
import { demodata } from "../../../libs/demo-data/data";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const ListData = () => {
  const { data } = useSelector((store: RootState) => store.formData);

  return (
    <div className="w-full py-10 mx-auto container space-y-10 px-4">
      <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-start">
        {" "}
        <span className="bg-gradient-to-r from-blue-400 to-pink-600 inline-block text-transparent bg-clip-text">
          Genie
        </span>{" "}
        : AI Gift Ideas
      </h1>
      <div className="w-full rounded-2xl border border-gray-200 p-4 md:p-8">
        <p className="font-normal text-xl md:text-2xl text-gray-600 text-center">
          Recommend birthday gift ideas for my {data.age} year old {data.buyFor}
          . {data.gender === "female" ? "She" : "He"} likes pickleball,
          gardening, and a stiff cocktail. Keep it under &#36;{data.spendAmount}
          .
        </p>
      </div>
      <p className="w-full text-base font-normal text-gray-600">
        Not liking these suggestion? Try again with more details or{" "}
        <span className="text-[#50BCD9]">get help from Genie.</span>
      </p>
      <div className="w-full p-4">
        <h1 className="text-3xl font-semibold">Beauty gift basket </h1>
        <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mx-auto">
          {demodata?.map((item: any) => {
            return <DataCards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListData;
