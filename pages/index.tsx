import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import BottomForm from "../components/bottomForm";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import ImageText from "../components/imageText";
import Layout from "../components/layout";
import { handleScroll } from "../utils/utils";

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
        className="pt-36 pb-24 object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
        style={{
          background: "url('/images/pyolanding.jpeg');",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="container pl-[10%]  mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center text-white pt-36 pb-36">
          <div className="flex flex-col w-full md:w-[50%] justify-center items-start text-center ">
            <h1 className="text-center my-4 text-[40px] leading-tight lg:text-6xl m-auto font-bold md:text-left">
              Visionary leaders for Africa's economic future
            </h1>
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
            <p className="mb-4 text-lg text-[white] font-[400] leading-loose text-justify">
              As a unifying platform for the exchange of knowledge and mutual
              learning, the Prof. Yemi Osinhajo Institute brings together all
              the different people and partners involved in promoting
              sustainable growth and development across a diverse fora.
            </p>
            <div className="text-center m-auto text-xl">
              <Button text="Learn more" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 md:py-16 bg-[#fff]" id="fellow">
        <h1 className=" pt-10 md:pt-0 px-0 md:px-20 md:my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#53575B]">
          Programmes and Fellowships
        </h1>
        <div className="pb-8 border-b-[1px] border-b-solid border-b-[#53575B] container  mx-auto flex flex-wrap flex-col md:flex-row text-black">
          <div className="flex flex-col w-full md:w-2/6 justify-start items-center md:items-start text-center md:text-left">
            <h1 className="hidden md:block my-4 text-3xl mt-5 md:mt-10 font-bold leading-tight text-[#53575B] border-0 md:border-l-[6px] border-l-solid border-l-[#53575B] pl-5">
              Prof. Yemi Osinbajo <br /> Fellowship Programme
            </h1>
          </div>

          <div className="w-full md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-5 text-[#53575B]">
            <h3 className="text-3xl text-center mx-auto pb-[20px]">
              {" "}
              PYO Fellows
            </h3>
            <div className="w-full">
              <img
                src="images/1.png"
                width="100%"
                height="70px"
                className="rounded-lg mb-[20px] boxShadow2"
              />
            </div>
            <p className="mb-4 text-lg text-[#53575B] font-[400] leading-loose text-center md:text-justify">
              Building a network of higher potential young Nigerians ready to
              make a difference.
            </p>
            <div className="text-center m-auto"></div>
          </div>

          <div className="w-full md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-5 text-[#53575B]">
            <h3 className="text-3xl text-center mx-auto pb-[20px]">
              PYO New Tribe
            </h3>
            <div className="w-full ">
              <img
                src="images/merge.jpeg"
                width="100%"
                height="70px"
                className="rounded-lg mb-[20px] boxShadow2"
              />
            </div>

            <p className="mb-4 text-lg text-[#53575B] font-[400] leading-loose text-center md:text-justify">
              Skills development programmes, empowerment and capacity building
              across various white and blue collar demographics.
            </p>
            <div className="text-center m-auto"></div>
          </div>

          <div className="w-200px text-center lg:text-left ml-0 lg:ml-[60%]">
            <Link href="#members">
              <Button gray text="Sign up" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:px-24 bg-[#fff] text-center mx-uato">
        <h1 className=" px-0 md:px-20 my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#53575B]">
          Latest Initiativies from the Institute
        </h1>
        <div className="pb-8 container px-3 mx-auto flex flex-wrap flex-col md:flex-row text-black border-b-[1px] border-b-solid border-b-[#53575B]">
          <div className="w-full md:w-2/6 pt-4 pb-8 align-middle  px-0 md:px-10 text-center mx-uato">
            <img src="images/4.png" className="boxShadow2 mx-auto rounded-lg" />
            <p className="mb-4 text-2xl text-[#53575B] font-[400] leading-thin text-center mt-5 ">
              Global Institute for Governance
            </p>
          </div>

          <div className="w-full md:w-2/6 pt-4 pb-8 align-middle  px-0 md:px-10 text-center">
            <img src="images/5.png" className="boxShadow2 mx-auto rounded-lg" />
            <p className="mb-4 text-2xl text-[#53575B] font-[400] leading-thin text-center mt-5 ">
              PYO - Tech for Growth
            </p>
          </div>

          <div className="w-full md:w-2/6 pt-4 pb-8 align-middle  px-0 md:px-10">
            <img src="images/6.png" className="boxShadow2 mx-auto rounded-lg" />
            <p className="mb-4 text-2xl text-[#53575B] font-[400] leading-thin text-center mt-5 ">
              PYO - Just Energy Transition
            </p>
          </div>

          <div className="text-center m-auto ">
            <Button gray text="Coming Soon" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
