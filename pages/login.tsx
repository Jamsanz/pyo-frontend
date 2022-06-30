import React, { useState } from "react";
import axios from "axios";
import toastr from "../utils/toastr";
import { useRouter } from "next/router";
import { http } from "../utils/utils";

const Login = () => {
  const router = useRouter();
  interface ILogin {
    email: string;
    password: string;
  }
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>();
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setLogin((): any => {
      return {
        ...login,
        [name]: value,
      };
    });
  };

  const submithandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await http.post("/login", {
        email: login?.email,
      });
      localStorage.setItem("token", response.data.data._id);
      localStorage.setItem("useremail", response.data.data.email);
      localStorage.setItem("firstName", response.data.data.firstName);
      localStorage.setItem("country", response.data.data.country);
      if (response) router.push("/dashboard");
      toastr.success("Login successful");
    } catch (error: any) {
      toastr.error("Email does not exist");
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
           
            <div className="xl:ml-20 xl:w-4/12 lg:w-4/12 md:w-8/12 mb-12 md:mb-0 rounded-lg p-8 boxShadow">
              <form>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <h2 className="text-center font-semibold mx-4 mb-0 text-2xl merriFont">
                    Sign in
                  </h2>
                </div>

                <div className="mb-6 mt-12">
                  <input
                    type="text"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={login?.email}
                    required
                    onChange={handleInput}
                  />
                </div>

                {/* <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    name="password"
                    value={login?.password}
                    required
                    onChange={handleInput}
                  />
                </div> */}

                <div className="flex justify-between items-center mb-6"></div>

                <div
                  className="text-center w-[20%]lg:text-left"
                  style={{ margin: "0 auto" }}
                >
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-[#0a2d6b] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={submithandler}
                  >
                    Login
                  </button>
                  {/* <div>
                    <a
                      href=""
                      className="text-center text-sm font-semibold pt-1 mb-0 mt-10"
                      style={{ margin: "0 auto" }}
                    >
                      Forgot password?
                    </a>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
