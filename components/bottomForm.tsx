import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { http } from "../utils/utils";
import toastr from "../utils/toastr";

import countries from "../data/countries";

export interface IData {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  membership: boolean;
  fellowship?: string;
}

const BottomForm = () => {
  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    membership: false,
    fellowship: "",
  });
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [fellow, setFellow] = useState<boolean>(false);

  const showForm = () => {
    setShow(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    http
      .post("/signup", data)
      .then((res) => {
        if (res.status == 201) {
          toastr.success(res.data.message);
          setSuccess(true);
        } else {
          toastr.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          toastr.error("Registration fail, try again");
        }
      })
      .finally(() => {
        setLoading(false);
        setSuccess(true);
      });
  };

  useEffect((): any => {
    if (success)
      setData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        membership: false,
        fellowship: "",
      });
  }, [success]);

  return (
    <div className={styles.container}>
      <div className="row mt-0 md:mt-10 px-0 md:px-16 py-12" id="members">
        <div
          className={`${
            show ? "items-start" : "items-center"
          }  flex flex-col md:flex-row w-full items-center`}
        >
          <div className="col w-full px-0 mr-5">
            <h2 className="text-main border-0 md:border-l-[6px] leading-8 lg:w-[75%] border-l-solid border-l-[#000] pl-5 mb-10">
              Be the first to know what we're doing.
            </h2>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className={` ${
                show
                  ? " animate__animated animate__fadeInDown h-auto w-auto overflow-auto"
                  : "h-0 w-0 overflow-hidden"
              }`}
            >
              <div className="fields-wrapper pb-[30px] lg:p-30px">
                <div className="fields-set">
                  <input
                    type="text"
                    data-error="Please enter your first name."
                    name="firstName"
                    onChange={handleChange}
                    value={data?.firstName}
                    required
                    placeholder="First name*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <input
                    type="text"
                    data-error="Please enter your last name."
                    name="lastName"
                    onChange={handleChange}
                    value={data?.lastName}
                    required
                    placeholder="Last name*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <input
                    type="email"
                    data-error="Please enter your email address."
                    name="email"
                    onChange={handleChange}
                    value={data?.email}
                    required
                    placeholder="Your email address*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <div className="PYO-select">
                    <select
                      id="dropdown"
                      className="default select"
                      name="country"
                      onChange={handleChange}
                      data-error="Please select your country."
                      value={data?.country}
                      required
                    >
                      <option value="" disabled>
                        Country of residence
                      </option>
                      {countries.map((country, key) => {
                        return (
                          <option key={key} value={country.code}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {fellow && (
                  <div className="fields-set">
                    <div className="PYO-select">
                      <select
                        id="dropdown"
                        className="default text-[#53575b] select"
                        onChange={handleChange}
                        name="fellowship"
                        data-error=""
                        value={data?.fellowship}
                        required
                      >
                        <option value="" disabled>
                          Select a fellowship programme
                        </option>
                        <option value="PYO Fellows">PYO Fellows </option>
                        <option value="PYO New Tribe">PYO New Tribe </option>
                      </select>
                    </div>
                  </div>
                )}
                {/* <div className="ml-2 my-2 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="membership"
                    id=""
                    onClick={() => setFellow(!fellow)}
                  />
                  <label htmlFor="memeber">
                    Would you like to become a member of the PYO institute?
                  </label>
                </div> */}

                <div className="Submit">
                  <input
                    className=""
                    type="submit"
                    name="submit"
                    value={loading ? "Loading..." : "Sign up"}
                    disabled={loading}
                  />
                </div>
              </div>
            </form>

            {!show ? (
              <div className="Submit">
                <input
                  className=""
                  type="submit"
                  value={"Sign up for our Newsletter"}
                  onClick={showForm}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomForm;
