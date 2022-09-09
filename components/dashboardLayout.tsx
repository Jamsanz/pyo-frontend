import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Member } from "../interfaces/member.interface";

const DashboardLayout = (props: any) => {
  const router = useRouter();

  const [nav, setNav] = useState<boolean>(false);
  const [user, setUser] = useState<Member>();
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [about, setAbout] = useState<boolean>(false);

  const navigateBar = () => {
    setOpen(!open);
    if (open === false) setAbout(false);
  };

  const navigateAbout = () => {
    if (window.innerWidth < 1024) {
      setAbout(!about);
    }
  };

  const logout = () => {
    localStorage.removeItem("appUser");
    window.location.reload();
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("appUser")!);
    setUser(user);
    setEmail(user?.username);
    if (!user?.userId) {
      router.push("/login");
    }
  }, []);

  if (!user?.userId) {
    return <div className="flex justify-center items-center w-full min-h-screen">...</div>
  }

  return (
    <div>
      <nav className="fixed z-30 w-full bg-white border-b-2">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                className="p-2 text-gray-600 rounded cursor-pointer lg:hidden "
                onClick={() => setNav(!nav)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <a href="#" className="flex items-center text-xl font-bold">
                <img src="/images/logo.jpeg" width="200px" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="mr-6 lg:block">
                <form action="#">
                  <div className="search-box relative mt-1  border cursor-pointer  text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex  p-2.5">
                    <input
                      type="search"
                      name="name"
                      className="outline-none flex-1 w-0 search-input"
                      placeholder="Search"
                    />
                    <button onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-search search-btn p-1 rounded-full hover:shadow-md"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div className="relative hidden lg:inline-block">
                <button className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                  <span className="mx-1">{email && user?.username}</span>
                </button>

                <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md"></div>
              </div>
              <i className="fas fa-user lg:hidden" />
            </div>
          </div>
        </div>
      </nav>
      <div className="lg:flex bottom-0 pt-16">
        <div
          className={`${
            nav ? "flex" : "hidden"
          } lg:flex flex-col bg-white w-full px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-[250px] fixed`}
        >
          <div className="flex flex-col justify-between mt-12 lg:mt-10 bg-white">
            <aside>
              <ul>
                <li>
                  <Link href="/dashboard">
                    <a
                      className={`flex items-center px-[4px] py-2 rounded-md  ${
                        props.pageName === "dashboard"
                          ? "bg-[#1F2937] text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <span className="font-medium text-[15px]">
                        <i className="fas fa-tachometer-alt-fast mr-2" />{" "}
                        Dashboard
                      </span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/profile">
                    <a
                      className={`flex items-center px-[4px] py-2   mt-2 lg:mt-5 rounded-md  ${
                        props.pageName === "profile"
                          ? "bg-[#1F2937] text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <span className="font-medium text-[15px]">
                        <i className="fas fa-user mr-2" /> Profile
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/group">
                    <a
                      className={`flex items-center px-[4px] py-2 mt-2 lg:mt-5 ${
                        props.pageName === "group"
                          ? "bg-[#1F2937] text-white"
                          : "hover:bg-gray-200"
                      } rounded-md `}
                    >
                      <span className="font-medium text-[15px]">
                        <i className="fa-solid fa-people-group mr-2" />
                        Fellows Chat Group
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="mr-3 relative scheduleNav">
                  <a
                    className={`flex items-center px-[4px] py-2 mt-2 lg:mt-5 ${
                      props.pageName === "pyo-schedule"
                        ? "bg-[#1F2937] text-white"
                        : "hover:bg-gray-200"
                    } rounded-md`}
                    onClick={navigateAbout}
                  >
                    <span className="font-medium text-[15px] text-left flex space-x-3">
                      <i className="fa-solid fa-calendar md:mt-2 mt-1" />
                      <span className="">Schedule Engagement With PYO</span>
                    </span>
                  </a>
                  <div
                    className={`absolute navItem bg-white text-black pl-2 lg:pl-0 lg:rounded-lg boxShadow5 lg:w-full ${
                      about ? "block relative " : "absolute hidden lg:block"
                    }`}
                  >
                    <ul>
                      <li className="mr-3">
                        <Link href="/pyo-schedule">
                          <a className="hover:font-bold inline-block w-full text-[#000] font-[18px] no-underline  hover:text-gray-800 hover:text-underline py-2 px-4">
                            Meeting
                          </a>
                        </Link>
                      </li>
                      <li className="mr-3">
                        <Link href="pyo-schedule">
                          <a className="hover:font-bold w-full inline-block text-[#000] font-[18px] no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                            Event Invitation
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/schedule-meeting">
                    <a
                      className={`flex items-center px-[4px] py-2 mt-2 lg:mt-5 ${
                        props.pageName === "schedule-meeting"
                          ? "bg-[#1F2937] text-white"
                          : "hover:bg-gray-200"
                      } rounded-md`}
                    >
                      <span className="font-medium text-[15px]">
                        <i className="fa-solid fa-calendar mr-2" /> Schedule
                        Event
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/news-feed">
                    <a
                      className={`flex items-center px-[4px] py-2 mt-2 lg:mt-5 ${
                        props.pageName === "news-feed"
                          ? "bg-[#1F2937] text-white"
                          : "hover:bg-gray-200"
                      } rounded-md`}
                    >
                      <span className="font-medium text-[15px]">
                        <i className="fa-solid fa-rss mr-2" /> News feed
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    className={`flex items-center px-[4px] w-full py-2 mt-2 lg:mt-5 text-gray-600 ${
                      props.pageName === ""
                        ? "bg-[#1F2937] text-white"
                        : "hover:bg-gray-200"
                    } rounded-md `}
                    onClick={logout}
                  >
                    <span className="font-medium text-[15px] hover:bg-gray-200">
                      <i className="fa-solid fa-power-off mr-2"></i> Log out
                    </span>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="mt-12 lg:ml-[250px] lg:h-full w-full">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
