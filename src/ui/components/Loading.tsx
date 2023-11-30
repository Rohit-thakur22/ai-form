import React from "react";
import loader from "../../assets/images/loading.png";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={loader}
        alt="Rotating Image"
        className="w-48 h-48 animate-spin-slow"
      />
    </div>
  );
};

export default Loading;
