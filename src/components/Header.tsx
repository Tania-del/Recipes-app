import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Plate } from "../icons";

const Header = () => {
  return (
    <header className="bg-violet flex justify-between p-3 border-b-[4px] border-gray border-double">
        <Link to={"/"} className="hidden sm:flex gap-3 items-center">
          <Plate className='shadow-3xl rounded-md' />
          <p className="text-green flex gap-2 font-roboto text-[27px] font-bold">Recipes<span className="text-white drop-shadow-3xl">App</span></p>             
        </Link>
      <Search />
    </header>
  );
};

export default Header;
