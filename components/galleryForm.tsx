import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { http } from "../utils/utils";
import toastr from "../utils/toastr";

interface IMessage {
  name?: string,
  email?: string,
  message?: string
}

const GalleryForm = () => {
  const [data, setData] = useState<IMessage>({
    name: "",
    email: "",
    message: ""
  });

  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [fellow, setFellow] = useState<boolean>(false);

  const showForm = () => {
    setShow(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    http
      .post("/message", data)
      .then((res) => {
        toastr.success("Message sent successfully");
        if (data) setSuccess(true);
      })
      .catch((err) => {
        if (err) {
          toastr.error("Failed, please try again");
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
        name: "",
        message: "",
        email: "",
      });
  }, [success]);

  return (
    <div className={styles.container}>
      <div className="container  mt-0 px-0 md:px-16 py-12">
        <div
          className={`${
            show ? "items-start" : "items-center"
          }  flex flex-col md:flex-row w-full items-center`}
        >
          <div className="col w-full px-0 mr-5">
            <div className="text-[#000] leading-8 lg:w-[75%] pl-5 mb-10 mx-auto border-l-0 md:border-l-8 border-l-black border-solid">
              <img
                src="images/chat.png"
                width="200px"
                className="block mx-auto w-[50%] md:inline md:w-[60%]"
              />
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
                    data-error="Please enter your name."
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
                    data-error="Please enter your email"
                    name="email"
                    onChange={handleChange}
                    value={data?.email}
                    required
                    placeholder="Email*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <textarea
                    data-error="Please enter your message"
                    name="message"
                    required
                    placeholder="Enter message*"
                    onChange={handleChange}
                    value={data?.message}
                    className="default-input2 resize-none h-[100px]"
                  />
                </div>

                <div className="Submit">
                  <input
                    className=""
                    type="submit"
                    name="submit"
                    value={loading ? "Sending..." : "Send"}
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
                  value={"Send Message"}
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

export default GalleryForm;
