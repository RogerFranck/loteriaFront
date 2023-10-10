import React from "react";

interface ButtonSubmitProps {
  children: string;
  size?: string;
  onClick?: any;
}

export default function ButtonSecondary({
  children,
  onClick,
  size = "w-full",
}: ButtonSubmitProps) {
  return (
    <button
      onClick={onClick}
      className={`${size} bg-[#353C59] p-2 text-white my-4 rounded-md`}
    >
      {children}
    </button>
  );
}
