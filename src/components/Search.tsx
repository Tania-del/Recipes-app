import React, { useState } from "react";
import { Cross, Menu, SearchSvgrepoCom } from "../icons";
import Navbar from "./Navbar";

export const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <form action="search" className="relative bg-white rounded">
        <input
          name="query"
          placeholder="Search recipes..."
          className="bg-white py-2 px-3 rounded pr-10 focus:outline-none focus:border-green focus:ring focus:ring-green w-[164px] focus:w-[215px] md:w-[215px] transition-width duration-500 ease-out font-roboto text-base"
        />
        <button className="absolute top-2 right-3 outline-none">
          {<SearchSvgrepoCom />}
        </button>
      </form>
      

      <Navbar className={isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%] md:translate-x-[100%] md:translate-y-0'} />
      <button
        onClick={() => handleToggleMenu()}
        className={`bg-creme border-2 border-solid border-creme rounded p-1 relative h-[37px] w-[37px] flex items-center  hover:text-red z-10`}
      >
          {isMenuOpen ? (
            <>
            <Cross  />
            </>
        ) : (
            <>
            <Menu />
            </>
          )}
      </button>
    </>
  );
};

export default Search;
