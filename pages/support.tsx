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
            email: "",
            phone: "",
            state: "",
            lga: "",
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
    }
    catch (err){
      console.log(err)
    }
  }, [state]);

  useEffect(() => {
    
    try {
      if (state) {
        const lga: any = NaijaStates?.lgas(`${state.state}`);
        setLga(lga?.lgas);
      }
    }
    catch (err) {
      console.log(err)
    }
  }, [state, lga]);
  return (
    <Layout>
      <div className="py-[50px]">
        <div className="form_wrapper notransition">
          <div className="form_container">
            <div className="title_container">
              <h2 className="text-[black]"> Financial Support Form </h2>
            </div>
            <div className="row clearfix">
              <div className="">
                <form className="text-[black]" onSubmit={handleSubmit}>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={state?.firstName}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Middle name"
                      value={state?.middleName}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={state?.lastName}
                      onChange={handleInput}
                    />{" "}
                  </div>
                  <div className="input_field flex gap-2 flex-col sm:flex-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={state?.email}
                      onChange={handleInput}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
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
                      >
                        <option value="" selected>
                          Select Gender
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
                          Select Category
                        </option>
                        <option value="Welding">Welding</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Carpentry">Carpentry</option>
                        <option value="Painting">Painting</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-1 flex-col sm:flex-row">
                    <div className="input_field">
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
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <div className="input_field select_option">
                      <select
                        name="state"
                        value={state?.state}
                        onChange={handleInput}
                      >
                        <option value="" selected>
                          Select State
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
                          Select LGA
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
