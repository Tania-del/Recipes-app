import React, { useState } from "react";
import { Cross, Menu, SearchSvgrepoCom } from "../icons";
import Navbar from "./Navbar";

export const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  console.log("🚀 ~ file: Search.tsx:6 ~ Search ~ isMenuOpen:", isMenuOpen);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <form action="search" className="relative bg-white rounded">
        <input
          name="query"
          placeholder="Search recipes..."
          className="bg-white py-2 px-3 rounded pr-10 focus:outline-none focus:border-green focus:ring focus:ring-green w-[164px] focus:w-[215px] transition-width duration-500 ease-out font-roboto text-base"
        />
        <button className="absolute top-2 right-3 outline-none">
          {<SearchSvgrepoCom />}
        </button>
      </form>
      <button
        onClick={() => handleToggleMenu()}
        className="bg-creme border-2 border-solid border-creme rounded p-1"
      >
        <span>
          {isMenuOpen ? (
            <>
              <Cross />
              <Navbar />
            </>
          ) : (
            <Menu />
          )}
        </span>
      </button>
    </>
  );
};

export default Search;
