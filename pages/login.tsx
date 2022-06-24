import React, {useState } from "react";
import Header from "../component/head";
import axios from "axios";
import toastr from "../utils/toastr";
import { useRouter } from "next/router";

const Login = () => {

  const router = useRouter()
  interface ILogin {
    email: string;
    password: string
  }
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: ""
  });
  
  const [error, setError] = useState<string>()
  const handleInput = (e:any) => {
    const {name, value} = e.target
      setLogin((): any => {
        return {
          ...login,
          [name]: value,
        };
      });
  }

  const submithandler = async (e: any) => {
    
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: login?.email,
        password: login?.password
      });
      console.log(response.data.data)
      localStorage.setItem("token", response.data.data._id);
      localStorage.setItem("useremail", response.data.data.email);

    if (response) router.push("/dashboard");
      toastr.success("Login successful");

    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
      toastr.error(error?.response?.data!)
    }
  }

 
  return (
    <Header>
      <div>
        <section className="login-block bg-[#458AFF]">
          <div className="container">
            <div className="row" style={{ margin: "0 auto" }}>
              <div className="col-sm-12">
                <form className="md-float-material form-material">
                  <div className="text-center">
                    <h2 className="text-[#000]">PYO Institute Admin Login</h2>
                  </div>
                  <div className="auth-box card ">
                    <div className="card-block ">
                      <div className="row m-b-20">
                        <div className="col-md-12">
                          <h3 className="text-center text-[#000]">Sign In</h3>
                        </div>
                      </div>
                      <div className="form-group form-primary">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          value={login?.email}
                          required
                          onChange={handleInput}
                        />
                        <span className="form-bar"></span>
                        <label className="float-label">
                          Your Email Address
                        </label>
                      </div>
                      <div className="form-group form-primary">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={login?.password}
                          required
                          onChange={handleInput}
                        />
                        <span className="form-bar"></span>
                        <label className="float-label">Password</label>
                      </div>
                      <div
                        className="text-center hover:cursor-pointer"
                        style={{ margin: "0 auto" }}
                      >
                        <button
                          className="bold text-[#000] rounded-lg px-[40px] py-[10px] bg-[#458AFF] hover:bg-[#458AFF]"
                          style={{ textDecoration: "none" }}
                          onClick={submithandler}
                        >
                          {" "}
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Header>
  );
};

export default Login;
