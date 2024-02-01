"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "@/lib/data";
import Link from "next/link";
import { NavBarItemProps } from "@/types";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const NavBarItem = ({ title, classprops, hash }: NavBarItemProps) => (
    <Link
      href={hash}
      onClick={() => setToggleMenu(false)}
      className=" flex w-full items-center justify-center px-3 py-3 transition "
    >
      <li
        className={`text-h6 cursor-pointer font-bold text-center ${classprops} hover:bg-white-50 hover:text-black-100 hover:rounded-full px-3 py-3`}
      >
        {title}
      </li>
    </Link>
  );

  return (
    <header className="z-[999] relative flex justify-between items-center ">
      <nav className="fixed top-0 h-[4.5rem] w-full rounded-none justify-start items-start bg-black-100">
        <Link href="/" className="flex ml-9 mt-4">
          <p className="text-h4 text-center justify-center">UI Library</p>
        </Link>
        <div className="fixed top-5 right-3">
          {toggleMenu ? (
            <AiOutlineClose
              onClick={() => setToggleMenu(false)}
              className="text-gray-300 cursor-pointer h-9 w-9 p-1"
            />
          ) : (
            <IoMdMenu
              className="text-gray-300 bg-black rounded-full [cursor-pointer h-9 w-9 p-1 md:hidden"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <ul className="z-[1000] fixed top-[4rem] -right-0 p-3 w-full h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md text-white-100 animate-slide-in">
          {links.map((link, index) => (
            <NavBarItem
              key={link.name + index}
              title={link.name}
              classprops="my-2 text-lg"
              hash={link.hash}
            />
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
