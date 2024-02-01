import React from "react";
import { Back } from "../icons";
import { useCustomNavigate } from "../hooks/useCustomNavigate";

const BackButton = () => {
  const { back } = useCustomNavigate();

  return (
    <button
      className="flex items-center gap-2 border-2 border-violet rounded px-3 py-2  mx-2 mt-4 bg-transparent cursor-pointer fill-violet text-violet hover:fill-white hover:text-white hover:bg-violet hover:scale-105 duration-500"
      onClick={back}
    >
      <Back />
      <p className="uppercase text-base">Go back</p>
    </button>
  );
};

export default BackButton;
