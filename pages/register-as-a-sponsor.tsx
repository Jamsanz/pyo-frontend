import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import ISponsor from "../interfaces/sponsor.interface";
import { http } from "../utils/utils";
import toastr from "../utils/toastr";

const Sponsor = () => {
  const [state, setState] = useState<ISponsor | any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    http
      .post("/sponsors", state)
      .then((res) => {
        if (res.status == 201) {
          toastr.success(res.data.message);
          setState({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "",
            nationality: "",
            offer: "",
            amount: "",
            location: "",
            sponsor_count: "",
          });
        } else {
          toastr.error(res.data.message);
        }
      })
      .catch((err) => {
        if (err) {
          toastr.error("Form submission fail, try again");
        }
      })
      .finally(() => {
        setLoading(false);
        // setSuccess(true);
      });
  };

  return (
    <Layout>
      <div className="py-[50px]">
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2 className="text-[black]"> Register as a Sponsor</h2>
            </div>
            <div className="row clearfix">
              <div className="">
                <form className="text-[black]" onSubmit={handleSubmit}>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      required
                      value={state?.firstName}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Enter middle name"
                      value={state?.middleName}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      required
                      value={state?.lastName}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                      value={state?.email}
                      onChange={handleInput}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      value={state?.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <div className="input_field select_option">
                      <select
                        name="gender"
                        value={state?.gender}
                        onChange={handleInput}
                        required
                      >
                        <option value="" selected>
                          Select Gender
                        </option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Enter your nationality"
                      required
                      value={state?.nationality}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <div className="input_field select_option">
                      <select
                        name="offer"
                        value={state?.offer}
                        onChange={handleInput}
                        required
                      >
                        <option value="" selected>
                          What do you want to offer?
                        </option>
                        <option value="Grant">Grant</option>
                        <option value="Micro Credit">Micro Credit</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                    <div className="input_field select_option">
                      <select
                        name="amount"
                        value={state?.amount}
                        onChange={handleInput}
                        required
                      >
                        <option value="" selected>
                          How much?
                        </option>
                        <option value="50,000">&#8358;50,000</option>
                        <option value="100,000">&#8358;100,000</option>
                        <option value="200,000">&#8358;200,000</option>
                        <option value="500,000">&#8358;500,000</option>
                        <option value="1,000,000 or more">&#8358;1,000,000 or more</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <div className="">
                      <small>
                        Do you have a specific location to sponsor? If yes,
                        kindly state
                      </small>

                      <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        value={state?.location}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="input_field select_option sm:mt-[20px]">
                      <small>How many people would you like to sponsor? </small>
                      <select
                        name="sponsor_count"
                        value={state?.sponsor_count}
                        onChange={handleInput}
                        required
                      >
                        <option value="" selected>
                          Select number
                        </option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="500 or more">500 or more</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-center 
                    text-[white]
                    font-bold text-[16px] bg-[#B48140] w-full py-3 #BA9E6D 
                    buttonHover"
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Submitting, please wait..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsor;
