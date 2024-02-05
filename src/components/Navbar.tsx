import React, { FC } from "react";
import { About, Heart, Home } from "../icons";
import clsx from "clsx";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, text: "Home", Icon: Home, link: "/" },
  { id: 2, text: "Favorites", Icon: Heart, link: "/favorites" },
  { id: 3, text: "About Us", Icon: About, link: "/about" },
];

interface INavbar {
  className: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "fixed bg-violet flex-col top-0 w-full left-0 transition-all ease-out md:w-[200px] md:right-0 md:left-auto md:top-[60px] z-10 opacity-[.98]",
        className
      )}
    >
      <ul>
        {navItems.map(({ Icon, id, text, link }) => (
          <li
            key={id}
            className="p-2 cursor-pointer duration-500  text-2xl text-white hover:text-green hover:bg-dark"
          >
            <Link to={link} className="flex items-center gap-3">
              {<Icon filled="false" width={24} height={24} />}
              <span className="text-nowrap">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
