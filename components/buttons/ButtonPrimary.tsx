import React from "react";

interface ButtonSubmitProps {
  children: string;
  size?: string;
  onClick?: any;
}

export default function ButtonPrimary({
  children,
  onClick,
  size = "w-full",
}: ButtonSubmitProps) {
  return (
    <button
      onClick={onClick}
      className={`${size} bg-white border-solid border-2 hover:bg-[#626d9932]  border-[#353C59] px-2 py-1.5 text-[#353C59] my-4 rounded-md`}
    >
      {children}
    </button>
  );
}
