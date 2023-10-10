import Image from "next/image";
import React from "react";
import Loader from "./loader";

interface SideBarProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function SideBar({ children, isLoading = false }: SideBarProps) {
  return (
    <div className="flex flex-row h-[100vh] ">
      <div className="bg-[#353C59] h-[100vh] p-6 max-sm:hidden">
        <Image src="/logo.png" width={240} height={61} alt="logoMain" />
        <div className="mt-14 flex flex-col justify-between text-white h-[75vh]"></div>
      </div>
      <div className="flex flex-col w-full">
        <div
          className={`${
            isLoading ? "flex justify-center items-center mt-40" : "mt-32"
          }`}
        >
          {isLoading ? <Loader /> : children}
        </div>
      </div>
    </div>
  );
}
