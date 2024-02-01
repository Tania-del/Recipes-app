import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Cross, Menu, Plate } from "../icons";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-violet flex justify-between p-3 border-b-[4px] border-gray border-double">
      <Link to={"/"} className="hidden sm:flex gap-3 items-center">
        <Plate className="shadow-3xl rounded-md" />
        <p className="text-green flex gap-2 font-roboto text-[27px] font-bold">
          Recipes<span className="text-white drop-shadow-3xl">App</span>
        </p>
      </Link>
      <Search />

      <Navbar
        className={
          isMenuOpen
            ? "translate-y-0"
            : "translate-y-[-100%] md:translate-x-[100%] md:translate-y-0"
        }
      />
      <button
        onClick={() => handleToggleMenu()}
        className={`bg-creme border-2 border-solid border-creme rounded p-1 relative h-[37px] w-[37px] flex items-center  hover:text-red z-10`}
      >
        {isMenuOpen ? (
          <>
            <Cross />
          </>
        ) : (
          <>
            <Menu />
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
