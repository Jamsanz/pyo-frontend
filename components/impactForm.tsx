import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

interface IData {
  name?: string;
  email?: string;
}

const ImpactForm = () => {
  const [data, setData] = useState<IData>({
    name: "",
    email: "",
  });
  const [show, setShow] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);

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

    if (data.name !== "" && data.email !== "") {
       setData({
         name: "",
         email: "",
       });
      
       setDownload(true);
    }
   
  };


  // useEffect(() => {
  //   if (data.name !== "" && data.email !== "") setDownload(true);
  // }, [data]);

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
              // onSubmit={handleSubmit}
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
                    name="name"
                    onChange={handleChange}
                    value={data?.name}
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
                    value={data?.email}
                    required
                    placeholder="Email*"
                    className="default-input"
                  />
                </div>

                {download && (
                  <div className="text-black bg-[#d8d8d8] text-center mb-4 py-6 relative">
                    <p
                      className="text-[#000] absolute right-4 top-1 cursor-pointer"
                      onClick={() => setDownload(false)}
                    >
                      x
                    </p>
                    <a
                      href="/Osinbajo Impact Assessment Report.pdf"
                      download="Osinbajo Impact Assessment Report"
                    >
                      Download Impact Report
                    </a>
                  </div>
                )}

                <input
                  className=""
                  type="submit"
                  name="submit"
                  value="Generate download"
                  onClick={handleSubmit}
                />

                {/* <a href={ download ? "/impact report.pdf" : "#"}
                  className="download"
                  download={"Osinbajo Impact Assessment Report"}
                  onClick={(e) => setData({email: "", name: ""})}
                >
                  {download ? "Download Impact Report" : "Generate Download"}
                </a> */}
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
