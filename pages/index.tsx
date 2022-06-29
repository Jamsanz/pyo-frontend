import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import BottomForm from "../components/bottomForm";
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
          background: "url('/images/PYO-13 11.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center text-white pt-36 pb-36">
          <div className="flex flex-col w-full md:w-2/3 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Prof. Yemi Osinbajo Fellowship Programme
            </p>
            <h1 className="my-4 text-[30px] lg:text-5xl font-bold leading-tight ">
              Proposed Initiatives for the Continuous Engagement of PYO
              supporters, cohorts and partners Private and Confidential
            </h1>
            {/* <p className="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p> */}
            {/* <a
              href="#form"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-md my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Subscribe
            </a> */}
          </div>
        </div>
      </div>

      <div className="pt-8 bg-gray-150">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-black">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-2xl font-bold leading-tight text-[#0a2d6b]">
              Proposed Programs and Initiatives - Keeping the Coal Hot for The
              New Tribe
            </h1>
          </div>

          <div className="w-full md:w-3/5  pt-4 pb-8 align-middle ">
            <h1 className="my-4 text-3l font-light text-justify">
              The campaign period for the recently concluded primaries elections
              of political parties in Nigeria affirmed the popularity of His
              Excellency, Vice President Yemi Osinbajo. The widespread
              enthusiasm from every demographic in the country towards a
              potential PYO Presidency created an electrical atmosphere
              everywhere he went. In the aftermath of the primary election, it
              is important to design programs and projects to:
            </h1>
            <ol className="my-4 text-3l font-light">
              <li className="text-justify pb-3">
                Cluster supporters of PYO in a manner that is coordinated and
                targeted.
              </li>
              <li className="text-justify pb-3">
                Engage these supporters across various demographics with
                programs and initiatives that help to.
              </li>
              <li className="text-justify pb-3">
                keep the fire burning towards the activation of The New Tribe
              </li>
              <li className="text-justify pb-3">
                Disseminate information on PYO’s values, and other initiatives
                to supporters
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pt-24 p-24 bg-gray-100 mx-auto px-2 pb-12">
        <div className="flex-wrap flex justify-center md:space-x-10 text-center md:text-left text-2xl text-black p-24 mx-auto px-2 pt-4 pb-12 ">
          <div className="my-5 lg:my-0 rounded-md w-full px-3 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
            <img
              className="w-full"
              src="/images/PYO-118.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center pb-5 text-[#0a2d6b]">
                PYO Fellows - An annual elite className Fellowship Program
              </div>
              <p className="text-gray-700 text-base text-justify">
                One-year fellowship which will be offered on a yearly basis, is
                aimed at building a network of high-potential young Nigerians
                who are already making a difference in their communities;
                creating a sustainable opportunity to take their work to the
                next level through an immersive curriculum that combines
                academic, skills-based, and hands-on learning, and providing
                opportunities for them to rise to top leadership positions in
                the public sector.
              </p>
            </div>
          </div>
          <div className="my-5 lg:my-0  rounded-md w-full px-3 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
            <img
              className="w-full"
              src="/images/PYO-124 6.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center pb-5 text-[#0a2d6b]">
                PYO New Tribe (white-collar) - “Keeping the coal hot” towards a
                2023 or 2027 campaign
              </div>
              <p className="text-base text-justify">
                The program will establish cells and clubs in primary and
                secondary schools with the aim to sell the ideals of PYO to
                young Nigerians at a young age. Catching them young and
                instilling the importance of values-based leadership, good
                governance, and hard work in children and young adults. The
                program will also establish clubs and social groups on
                university campuses, and among young adult professionals in the
                public and private sector.
              </p>
            </div>
          </div>

          <div className="my-5 lg:my-0  rounded-md w-full px-3 md:mt-5g lg:mt-0 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
            <img
              className="w-full"
              src="/images/PYO-114.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center pb-5 text-[#0a2d6b]">
                PYO New Tribe (blue-collar) - “Keeping the coal hot” towards a
                2023 or 2027 campaign.
              </div>
              <p className="text-gray-700 text-base text-justify ">
                The PYO New Tribe blue collar project runs programmes, projects
                and activities across various blue collar demographics such as
                market women, taxi drivers, okada riders, artisans etc. The
                project will coordinate and support these groups with tools and
                advisory for business development. The project will also seek to
                support these groups with loans (market moni, tradermoni style),
                grants (survival fund style), and equipment for work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pt-36 pb-24 object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
        style={{
          background: "url('/images/PYO-13 11.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-black">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-6 text-[30px] lg:text-5xl font-bold leading-tight text-white">
              Be the first to know what we&apos;re doing.
            </h1>
          </div>

          {/* <!-- Right Col --> */}
          <div
            className="py-8 align-middle text-center"
            style={{
              margin: "0 auto",
            }}
          >
            <div className="bg-white  px-4 py-3 rounded-md">
              <Link
                className=" lg:mx-0 hover:underline bg-white text-black font-light shadow rounded-4 my-6  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex-1"
                href="#member"
                style={{
                  backgroundColor: "white",
                }}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-34 bg-gray-100 flex justify-center" id="about">
        <div className="container px-3 mx-4 md:mx-12 my-12 flex flex-wrap flex-col md:flex-row text-black">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-2 text-[30px] lg:text-5xl font-bold leading-tight mb-10 text-[#0a2d6b]">
              Prof. Yemi Osinbajo Global Institute for Governance!
            </h1>
            <p className="leading-normal text-2sm mb-8 font-light text-justify">
              PYO Global Institute for Governance aims to develop exceptionally
              passionate, principled, and innovative governmental, corporate,
              and civil society leaders while also establishing itself as a
              global governance and leadership institute of repute with a
              long-term impact on national and corporate governance, ultimately
              accelerating the sustainable development of communities in Nigeria
              and around the world.
            </p>
            <input
              className="mx-auto lg:mx-0 hover:underline bg-gray-100 text-gray-800 font-bold rounded-5 my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
              value="Find Out More"
            />
          </div>

          <div className=" flex w-full md:w-3/5 py-6 justify-end ">
            <img className="w-full md:w-4/5 z-10" src="/images/PYO-118.jpg" />
          </div>
        </div>
      </div>

      <ImageText />

      <div className="pt-34 bg-gray-100 flex justify-center">
        <div className="container px-3 mx-4 lg:mx-12  my-12 flex flex-wrap flex-col md:flex-row text-black">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start">
            <h1 className="my-4 text-[20px] md:text-3xl font-semibold leading-tight text-justify text-[#0a2d6b]">
              The below will be achieved through the PYO Fellowship Program.
            </h1>
            <p className="leading-normal text-2sm mb-8 font-thin text-justify">
              1. Cluster supporters of PYO in a manner that is coordinated and
              targeted.
            </p>
            <p className="leading-normal text-2sm mb-8 font-thin text-justify">
              2. Engage these supporters across various demographics with
              programs and initiatives that help to keep the fire burning
              towards the activation of The New Tribe.
            </p>
            <p className="leading-normal text-2sm mb-8 font-thin text-justify">
              3. Cluster supporters of PYO in a manner that is coordinated and
              targeted. response.
            </p>
          </div>

          <div className=" flex w-full md:w-3/5 py-6 justify-end ">
            <img className="w-full md:w-4/5 z-10" src="/images/PYO-17.jpg" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 text-black mt-1 p- md:h-190">
        <div
          // className="object-cover h-230 w-full bg-cover  p-12  pt-24 pb-24"
          className="object-cover w-[100%] bg-contain bg-no-repeat  p-12  pt-24 pb-24 merriFont lg:bg-cover bg-center text-white"
          style={{
            background: "url(/images/PYO-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-2xl font-bold">PRESIDENT YEMI OSINBANJO</h2>
          <p className="mb-8 text-justify">
            As societies transition to low-carbon and resilient economies, this
            initiative will develop a framework for promoting equitable access
            to the benefits and sharing of the costs of sustainable development,
            ensuring that the livelihoods of all people, including the most
            vulnerable, are supported and enhanced. A just energy transition can
            help Nigeria, and by extension, African countries achieve greater
            income redistribution while also ensuring that climate action takes
            place in tandem with development.
          </p>
        </div>
      </div>
    </Layout>
  );
};



export default Home;
