import React, { useState } from 'react'
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white merrifont">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <img src="/images/logo.jpeg" width="200px" />
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-[#53575B] hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            !open && "hidden"
          } mt-2 lg:mt-0 bg-white md:bg-transparent lg:bg-transparent text-black p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center merrifont">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-[#000] font-bold font-[18px] no-underline"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-[#000] font-bold font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#members"
              >
                Members
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-[#000] font-bold font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#fellow"
              >
                Fellowship
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Header;