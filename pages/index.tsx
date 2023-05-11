import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState, MouseEvent } from "react";
import BottomForm from "../components/bottomForm";
import Button from "../components/button";
import Layout from "../components/layout";
import PyoFellow from "../components/pyoFellow";
import Modal from "../components/signUpModal";
import {
  handleScroll,
  IReadMore,
  pyoFellowship,
  pyoInstitute,
  readMore,
  readMoreInstitute,
} from "../utils/utils";

const Home: NextPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div
        className="pt-36 pb-24 object-cover w-[100%] bg-contain bg-center bg-no-repeat lg:bg-cover"
        style={{
          background: "url('/images/pyolanding.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="container pl-[3%] pr-[3%]  md:pl-[15%]  lg:pl-[25%] mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center text-white pt-[10rem] pb-36">
          <div className="flex flex-col w-full md:w-[100%] xl:w-[80%] justify-center items-start text-center ">
            <h1 className=" mt-4 text-[40px] leading-tight lg:text-6xl m-auto font-bold text-left">
              Visionary leaders for Africa's economic future
            </h1>
            <p className="tribe italic text-left text-[40px] lg:text-3xl my-6">
              It is time for a new tribe
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pt-24 pb-12 bg-[#53575B]" id="about">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row text-black">
          <div className="flex flex-col w-full md:w-2/6 justify-start items-center md:items-start text-center md:text-left">
            <h1 className=" pl-0 my-4 text-3xl font-bold leading-tight text-[#fff] border-0 md:border-l-[6px] border-l-solid border-l-white md:pl-5">
              Promoting Sustainable <br /> Growth
            </h1>
          </div>

          <div className="w-full md:w-4/6 pt-4 pb-8 align-middle  px-0 md:px-10">
            <p className="mb-4 text-2xl text-[white] font-[400] leading-[2.2rem] text-justify">
              As a unifying platform for the exchange of knowledge and mutual
              learning, the PYO Institute for Global Governance brings together
              all the different people and partners involved in promoting
              sustainable growth and development across a diverse fora.
            </p>
            {/* <div className="text-center m-auto text-xl">
              <Button text="Learn more" />
            </div> */}
          </div>
        </div>
      </div>
      <PyoFellow />
      <BottomForm />
    </Layout>
  );
};

export default Home;
