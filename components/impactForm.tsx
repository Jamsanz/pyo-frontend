import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { http } from "../utils/utils";
import toastr from "../utils/toastr";

interface IData {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
}

const ImpactForm = () => {
  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
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
      .post("/register", data)
      .then((res) => {
        toastr.success("Succesfully registered");
        if (data) setSuccess(true);
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
      });
  }, [success]);

  return (
    <div className={styles.container}>
      <div className="container  mt-0 px-0 md:px-16 py-12" id="members">
        <div
          className={`${
            show ? "items-start" : "items-center"
          }  flex flex-col md:flex-row w-full items-center`}
        >
          <div className="col w-full px-0 mr-5">
            <div className="text-[#000] leading-8 lg:w-[90%] pl-5 mb-10 mx-auto">
              {/* <h2 className="text-[2.375rem] tracking-[-0.02rem]"></h2> */}
              <h2 className="text-[#000] border-0 md:border-l-[6px] leading-8 lg:w-[75%] border-l-solid border-l-[#000] pl-5 mb-10">
                Download the full Impact Report
              </h2>
            </div>
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
                    data-error="Please enter yourname."
                    name="Name"
                    onChange={handleChange}
                    value={data?.firstName}
                    required
                    placeholder="Name*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <input
                    type="email"
                    data-error="Please enter your email."
                    name="email"
                    onChange={handleChange}
                    value={data?.lastName}
                    required
                    placeholder="Email*"
                    className="default-input"
                  />
                </div>

                <div className="Submit">
                  <input
                    className=""
                    type="submit"
                    name="submit"
                    value={loading ? "Loading..." : "Generate download link"}
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
                  value={"Download"}
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

export default ImpactForm;
