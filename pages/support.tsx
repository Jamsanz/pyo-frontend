import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { http } from "../utils/utils";
import toastr from "../utils/toastr";
import { IFinancialSupport } from "../interfaces/support.interface";
// @ts-ignore
import NaijaStates from "naija-state-local-government";

const FinancialSupport = () => {
  const [states, setStates] = useState<any>();
  const [lga, setLga] = useState<any>();
  const [lgaOfResidence, setLgaOfResidence] = useState<any>();

  const [state, setState] = useState<IFinancialSupport | any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    if (name === "registerWithCooperative") {
      if (value === "true") {
        return setState({
          ...state,
          registerWithCooperative: true,
        });
      } else {
        return setState({
          ...state,
          registerWithCooperative: false,
        });
      }
    }
    setState((item: any) => {
      return {
        ...item,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    http
      .post("/financial-supports", state)
      .then((res) => {
        if (res.status == 201) {
          toastr.success(res.data.message);
          setState({
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            stateOfResidence: "",
            lgaOfResidence: "",
            address: "",
            dob: "",
            maritalStatus: "",
            email: "",
            phone: "",
            state: "",
            lga: "",
            qualification: "",
            applicantCategory: "",
            registerWithCooperative: "",
            monthlyEarnings: "",
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
      });
  };

  useEffect(() => {
    try {
      const state: any = NaijaStates?.states();
      setStates(state);
    } catch (err) {
      console.log(err);
    }
  }, [state]);

  useEffect(() => {
    try {
      if (state) {
        const lga: any = NaijaStates?.lgas(`${state.state}`);
        setLga(lga?.lgas);
      }
    } catch (err) {
      console.log(err);
    }
  }, [state, lga]);

  useEffect(() => {
    try {
      if (state) {
        const lga: any = NaijaStates?.lgas(`${state.stateOfResidence}`);
        setLgaOfResidence(lga?.lgas);
      }
    } catch (err) {
      console.log(err);
    }
  }, [state, setLgaOfResidence]);

  return (
    <Layout>
      <div className="py-[50px]">
        <div className="form_wrapper notransition">
          <div className="form_container">
            <div className="title_container">
              <h2 className="text-[black]"> Apply for Financial Support</h2>
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
                      placeholder="Enter Last name"
                      required
                      value={state?.lastName}
                      onChange={handleInput}
                    />{" "}
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
                        name="stateOfResidence"
                        value={state?.stateOfResidence}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select state of origin
                        </option>
                        {states?.map((item: any) => {
                          return (
                            <option
                              value={item}
                              key={item}
                              className="capitalize"
                            >
                              {item}
                            </option>
                          );
                        })}
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                    <div className="input_field select_option">
                      <select
                        name="lgaOfResidence"
                        value={state?.lgaOfResidence}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select LGA of origin
                        </option>
                        {lgaOfResidence?.map((item: any) => {
                          return (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      required
                      value={state?.address}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      name="qualification"
                      placeholder="Enter your qualification"
                      required
                      value={state?.qualification}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="flex gap-2 flex-1 flex-col sm:flex-row justify-center">
                    <div className="">
                      <small>Enter date of birth</small>
                      <input
                        type="date"
                        name="dob"
                        placeholder=""
                        required
                        value={state?.dob}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="input_field select_option sm:mt-[20px]">
                      <select
                        name="maritalStatus"
                        value={state?.maritalStatus}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select your marital status
                        </option>
                        <option value="Single">Single</option>
                        <option value="Marries">Married</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-col sm:flex-row">
                    <div className="input_field select_option">
                      <select
                        name="gender"
                        value={state?.gender}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select gender
                        </option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                    <div className="input_field select_option">
                      <select
                        name="applicantCategory"
                        value={state?.applicantCategory}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select category
                        </option>
                        <option value="Carpentry">Carpentry</option>
                        <option value="Construction">Construction</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Fashion Designing">Fashion Designing</option>
                        <option value="Farming">Farming</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Minning">Minning</option>
                        <option value="Painting">Painting</option>
                        <option value="Plumbering">Plumbering</option>
                        <option value="Trading">Trading</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Welding">Welding</option>
                        <option value="Others">Others</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-1 flex-col sm:flex-row">
                    <div>
                      <small> How much do you make monthly?</small>
                      <input
                        type="text"
                        name="monthlyEarnings"
                        placeholder="Monthly Earnings"
                        required
                        value={state?.monthlyEarnings}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="input_field select_option">
                      <div>
                        <small>Are you registered with a co-operative?</small>
                        <select
                          name="registerWithCooperative"
                          value={state?.registerWithCooperative!}
                          onChange={handleInput}
                        >
                          <option value="" selected>
                            Registered with Cooperative?
                          </option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                        <div className="select_arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <div className="input_field select_option">
                      <select
                        name="state"
                        value={state?.state}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select state of employment
                        </option>
                        {states?.map((item: any) => {
                          return (
                            <option
                              value={item}
                              key={item}
                              className="capitalize"
                            >
                              {item}
                            </option>
                          );
                        })}
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                    <div className="input_field select_option">
                      <select
                        name="lga"
                        value={state?.lga}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select LGA of employment
                        </option>
                        {lga?.map((item: any) => {
                          return (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          );
                        })}
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

export default FinancialSupport;
