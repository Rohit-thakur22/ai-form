import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { FaStar } from "react-icons/fa";

const DataCards = ({ item }: any) => {
  const { data } = useSelector((store: RootState) => store.formData);
  return (
    <div className="flex flex-col w-full sm:w-[250px] border border-gray-200 rounded-xl h-80 place-self-center">
      <div className="w-full h-1/2 mx-auto flex justify-center">
        <img src={item?.img} alt="imag" className="object-cover " />
      </div>
      <div className="bg-gray-100 flex flex-col gap-4 h-1/2 p-2">
        <h1 className="tracking-wider text-base font-semibold">
          {item?.title}
        </h1>
        <span className="flex items-center gap-2">
          {" "}
          {Array.from(Array(item?.rating), () => {
            return <FaStar color="#FFA31A" />;
          })}{" "}
        </span>
        <span className="border border-gray-200 px-1 bg-slate-200 rounded-lg w-max font-medium">
          &#36; {item?.price}
        </span>
        <span className="font-normal text-xs tracking-wider">
          Typical range: &#36;100-&#36;{data.spendAmount}
        </span>
      </div>
    </div>
  );
};

export default DataCards;
