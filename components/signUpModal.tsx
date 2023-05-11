import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import countries from '../data/countries';
import { http } from '../utils/utils';
import { IData } from './bottomForm';
import toastr from '../utils/toastr';

export interface modalProps {
  open: boolean,
  setOpen: (e?: any) => void
}

const Modal = ({ open, setOpen }: modalProps) => {
  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    membership: false,
    fellowship: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

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
          setOpen();
        } else {
          toastr.error(res.data.message);
        }
      })
      .catch((err) => {
        if (err) {
          toastr.error(err.response.data.message);
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
    <div className={`${open ? 'flex': 'hidden'} min-h-[100vh] z-50 min-w-[100vw] bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 justify-center items-center`}>
      <div className="flex justify-center items-center p-4 bg-white h-[75vh] w-[80vw] md:w-[50vw] relative">
        <span
          className="absolute top-2 right-4 text-2xl active:scale-110 active:animate-pulse cursor-pointer text-black"
          onClick={setOpen}
        >
          <i className="fa-solid fa-circle-xmark" />
        </span>
        <form
          onSubmit={handleSubmit}
          className={` ${" animate__animated animate__fadeInDown overflow-auto"}`}
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
                  className="default text-[#53575b] select"
                  name="fellowship"
                  data-error=""
                  required
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">Male </option>
                  <option value="female">Female</option>
                </select>
              </div>
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
      </div>
    </div>
  )
}

export default Modal;