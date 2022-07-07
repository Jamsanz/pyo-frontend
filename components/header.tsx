import React, { useState } from 'react'
import Link from "next/link";

const Header = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [about, setAbout] = useState<boolean>(false);


  const navigateBar = () => {
    setOpen(!open)
    if (open === false) setAbout(false)
  }
  
  const navigateAbout = () => {
    if (window.innerWidth < 1024) {
      setAbout(!about)
    console.log("clicked");

    }
    return;
  }
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-white merrifont"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center hover:cursor-pointer">
          <Link href="/">
            <img src="/images/logo.jpeg" width="200px" />
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-[#53575B] hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={navigateBar}
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
            <li className="mr-3 relative nav">
              <a
                className="inline-block py-2 px-4 text-[#000] font-[18px] no-underline cursor-pointer"
                onClick={navigateAbout}
              >
                About
              </a>
              <div
                className={`absolute navItem bg-white text-black pl-2 lg:pl-0 lg:rounded-lg boxShadow5 lg:w-[140px] ${
                  about ? "block relative " : "absolute hidden lg:block"
                }`}
              >
                <ul>
                  <li className="mr-3">
                    <Link href="/gallery">
                      <a className="hover:font-bold inline-block text-[#000] font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Gallery
                      </a>
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link href="/contribution">
                      <a
                        className="hover:font-bold  inline-block text-[#000] font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                        href=""
                      >
                        Contribution
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mr-3">
              <Link
                href="/#members">
              <a className="inline-block text-[#000] font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              >
                  Members
                  </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/#fellow">
                <a className="inline-block text-[#000] font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Fellowship
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;