import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((store: RootState) => store.formData);
  return (
    <div className="flex flex-col  items-center min-h-screen w-full">
      <Navbar />
      {isLoading ? <Loading /> : children}
    </div>
  );
};

export default Layout;
