/* eslint-disable jsx-a11y/img-redundant-alt */
import loader from "../../assets/images/loading.png";
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-screen w-full">
      <img
        src={loader}
        alt="Rotating Image"
        className="w-48 h-48 animate-spin-slow"
      />
      <h1 className="text-4xl font-semibold">Generating Gift Ideas...</h1>
      <p className="text-2xl font-semibold">
        Hang tight. Our AI-Powered Genie is generating gift ideas. This can take
        about 5-10 seconds.
      </p>
    </div>
  );
};

export default Loading;
