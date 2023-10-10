import React from "react";

interface ButtonSubmitProps {
  children: string;
  size?: string;
}

export default function ButtonSubmit({
  children,
  size = "w-full",
}: ButtonSubmitProps) {
  return (
    <button
      type="submit"
      className={`${size} bg-[#353C59] p-2 text-white my-4 rounded-md`}
    >
      {children}
    </button>
  );
}
