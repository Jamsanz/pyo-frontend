import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
	const router = useRouter()

	const [nav, setNav] = useState<boolean>(false)

	const [email, setEmail] = useState<string>("")
	const [firstName, setFirstName] = useState<string>("")

	const logout = () => {
	localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.reload();
	}
 	useEffect(() => {

		const id = localStorage.getItem("token")
		setEmail(localStorage.getItem("useremail")!);
		setFirstName(localStorage.getItem("firstName")!);

		if (id) {
			router.push("/dashboard")
		}
		else router.push("/login");
	}, []);
	

	return (
    <div>
      <nav className="fixed z-30 w-full bg-black border-b-2">
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
                <img src="/images/pyologo.png" width="200px" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden mr-6 lg:block">
                <form action="#">
                  <label className="sr-only">Search</label>
                  <div className="relative mt-1 lg:w-64">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="name"
                      className=" border  text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>

              <div className="relative inline-block ">
                <button className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                  <span className="mx-1">{email && email}</span>
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>

                <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="lg:flex pt-12">
        <div
          className={`${
            nav ? "flex" : "hidden"
          } lg:flex flex-col w-full px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-[250px] fixed`}
          style={{ borderRight: "2px solid #1f2937" }}
        >
          <div className="flex flex-col justify-between mt-6 bg-white">
            <aside>
              <ul>
                <li>
                  <a
                    className="flex items-center px-[4px] py-2 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <span className="mx-4 font-medium text-[15px]">
                      Dashboard
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center px-[4px] py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <span className="mx-4 font-medium text-[15px]">
                      Profile
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-[4px] py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <span className="mx-4 font-medium text-[15px]">Category</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-[4px] py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <span className="mx-4 font-medium text-[15px]">Schedule Meeting</span>
                  </a>
                </li>
                <li>
                  <button
                    className="flex items-center px-[4px] py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    onClick={logout}
                  >
                      <span className="mx-4 font-medium text-[15px] text-gray-600  hover:bg-gray-200">
                        Log out
                      </span>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-[100%] h-full p-4 m-8 overflow-y-auto text-center mx-auto">
          <h2 className="text-[#000]">
            {" "}
            Welcome{" "}
            <span className="capitalize"> {firstName && firstName} </span>
          </h2>

          {/* <div className="flex items-center text-center justify-center p-16 mr-8 border-4 lg:p-40 mx-auto"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard