import type { NextPage } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import BottomForm from '../components/bottomForm';
import ImageText from '../components/imageText';
import { handleScroll } from '../utils/utils';


const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<any>();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <Script
          strategy='beforeInteractive'
          src={'../scripts/static.js'}
        >
        </Script>
      </Head>
      <div
        className="leading-normal tracking-normal text-white gradient"
        style={{ fontFamily: "Source Sans Pro, sans - serif" }}
        onScroll={handleScroll}
      >
        {/* <!-- Header --> */}
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
          <div
            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
          >
            <div className="pl-4 flex items-center">
              <img src="/images/pyologo.png" width="200px"/>
            </div>
            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!open && 'hidden'} mt-2 lg:mt-0 bg-white md:bg-transparent lg:bg-transparent text-black p-4 lg:p-0 z-20`}
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 text-black font-bold no-underline"
                    href="#"
                  >Active</a
                  >
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >link</a
                  >
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >link</a
                  >
                </li>
              </ul>
              <button
                id="navAction"
                className={`mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
              >
                Action
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        {/* <!--Hero--> */}
        <div className="pt-36 pb-24 object-cover w-full bg-cover bg-center" style={{ background: "url('/images/PYO-13 11.jpg')" }}>
          <div
            className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center text-white pt-36 pb-36">

            <div
              className="flex flex-col w-full md:w-2/3 justify-center items-start text-center md:text-left"
            >
              <p className="uppercase tracking-loose w-full">Prof. Yemi Osinbajo Fellowship Programme</p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Proposed Initiatives for the Continuous Engagement of PYO supporters,
                cohorts and partners
                Private and Confidential
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Sub-hero message, not too long and not too short. Make it just
                right!
              </p>
              <a
                href="#form"
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-md my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="pt-24 bg-gray-150">
          <div
            className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-black">

            <div
              className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
            >

              <h1 className="my-4 text-2xl font-bold leading-tight">
                Proposed Programs and Initiatives - Keeping the Coal Hot for The New Tribe
              </h1>

            </div>

            <div className="w-full md:w-3/5 py-8 align-middle">
              <h1 className="my-4 text-3l font-light">
                The campaign period for the recently concluded primaries elections of political parties in Nigeria
                affirmed the popularity of His Excellency, Vice President Yemi Osinbajo. The widespread enthusiasm
                from every demographic in the country towards a potential PYO Presidency created an electrical
                atmosphere everywhere he went. In the aftermath of the primary election, it is important to design
                programs and projects to:
              </h1>
              <ol className="my-4 text-3l font-light">

                <li>Cluster supporters of PYO in a manner that is coordinated and targeted</li>
                <li>Engage these supporters across various demographics with programs and initiatives that help to <br />
                  keep the fire burning towards the activation of The New Tribe</li>
                <li>Disseminate information on PYO’s values, and other initiatives to supporters</li>
              </ol>
            </div>
          </div>
        </div>


        <div className="p-24 bg-gray-100 mx-auto px-2 pb-12">
          <div
            className="flex-wrap flex justify-center md:space-x-10 text-center md:text-left text-2xl text-black p-24 mx-auto px-2 pt-4 pb-12 "
          >

            <div className="rounded-md w-full px-3 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
              <img className="w-full" src="/images/PYO-118.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">PYO Fellows - An annual elite className Fellowship Program</div>
                <p className="text-gray-700 text-base">
                  one-year fellowship which will be offered on a yearly basis, is aimed at building a network of
                  high-potential young Nigerians who are already making a difference in their communities; creating a
                  sustainable opportunity to take their work to the next level through an immersive curriculum that
                </p>
                <p className="text-gray-700 text-base">
                  combines academic, skills-based, and hands-on learning, and providing opportunities for them to rise to
                  top leadership positions in the public sector.
                </p>
              </div>

            </div>
            <div className="rounded-md w-full px-3 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
              <img className="w-full" src="/images/PYO-124 6.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">PYO New Tribe (white-collar) - “Keeping the coal hot” towards a 2023 or 2027 campaign</div>
                <p className="text-gray-700 text-base">
                  The program will establish cells and clubs in primary and secondary schools with the aim to sell
                  the ideals of PYO to young Nigerians at a young age. Catching them young and instilling the importance
                  of values-based leadership, good governance, and hard work in children and young adults. The program
                  will also establish clubs and social groups on university campuses, and among young adult professionals
                  in the public and private sector.
                </p>
              </div>

            </div>

            <div className="rounded-md w-full px-3 md:mt-5g lg:mt-0 md:px-0 overflow-hidden shadow-lg md:w-1/3 lg:w-1/4">
              <img className="w-full" src="/images/PYO-114.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">PYO New Tribe (blue-collar) - “Keeping the coal hot” towards a 2023 or 2027 campaign.</div>
                <p className="text-gray-700 text-base">
                  The PYO New Tribe blue collar project runs programmes, projects and activities across various blue collar
                  demographics such as market women, taxi drivers, okada riders, artisans etc. The project will coordinate
                  and support these groups with tools and advisory for business development. The project will also seek to
                  support these groups with loans (market moni, tradermoni style), grants (survival fund style), and
                  equipment for work.
                </p>
              </div>

            </div>
          </div>
        </div>


        <div className="pt-60 pb-60 text-white text-center object-cover w-full  bg-fixed bg-center" style={{ background: "url('/images/PYO-13 11.jpg')" }}>
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-black">

            <div
              className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
            >

              <h1 className="my-6 text-5xl font-bold leading-tight text-white">
                Be the first to know what we&apos;re doing.
              </h1>

            </div>

            {/* <!-- Right Col --> */}
            <div className="w-full md:w-3/5 py-8 align-middle">
              <input
                className=" lg:mx-0 hover:underline bg-gray-100 text-black font-light shadow rounded-4 my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex-1"
                type="button"
                value="Subscribe"
              >
              </input>
            </div>
          </div>
        </div>

        <div className="pt-34 pl-6 bg-gray-100 flex justify-center">
          <div
            className="container px-3 mx-12  my-12 flex flex-wrap flex-col md:flex-row text-black">

            <div
              className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
            >
              <p className="uppercase tracking-loose w-full">What business are you?</p>
              <h1 className="my-2 text-5xl font-bold leading-tight">
                Prof. Yemi Osinbajo Global Institute for Governance!
              </h1>
              <p className="leading-normal text-2sm mb-8 font-light">
                PYO Global Institute for Governance aims to develop exceptionally passionate, principled, and
                innovative governmental, corporate, and civil society leaders while also establishing itself as a global
                governance and leadership institute of repute with a long-term impact on national and corporate
                governance, ultimately accelerating the sustainable development of communities in Nigeria and around
                the world.
              </p>
              <input
                className="mx-auto lg:mx-0 hover:underline bg-gray-100 text-gray-800 font-bold rounded-5 my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                type="button" value="Find Out More"
              />
            </div>

            <div className=" flex w-full md:w-3/5 py-6 justify-end ">
              <img className="w-full md:w-4/5 z-10" src="/images/PYO-118.jpg" />
            </div>
          </div>
        </div>

        <ImageText />

        <div className="pt-34 pl-6 bg-gray-100 flex justify-center">
          <div className="container px-3 mx-12  my-12 flex flex-wrap flex-col md:flex-row text-black">
            <div
              className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
            >
              <p className="capitalize tracking-loose w-full font-thin">Government Advisory</p>
              <h1 className="my-4 text-3xl font-semibold leading-tight">
                Supporting governments on the ground.
              </h1>
              <p className="leading-normal text-2sm mb-8 font-thin">
                We have staff in more than 20 countries across four continents and are helping leaders build strong crisis response systems. We are also providing bespoke support on disease suppression measures, testing, equipment procurement, tech solutions and economic response.
              </p>
            </div>

            <div className=" flex w-full md:w-3/5 py-6 justify-end ">
              <img className="w-full md:w-4/5 z-10" src="/images/PYO-17.jpg" />
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-black mt-1 p- md:h-190" >
          <div className='object-cover h-230 w-full bg-cover bg-center p-12 text-white pt-24 pb-24' style={{ background: "url(/images/PYO-1.jpg)" }}>
            <h2 className="text-2xl font-bold">PRESIDENT YEMI OSINBANJO</h2>
            <p className="mb-8 ">As societies transition to low-carbon and resilient economies, this initiative will develop a framework for
              promoting equitable access to the benefits and sharing of the costs of sustainable development,
              ensuring that the livelihoods of all people, including the most vulnerable, are supported and enhanced.
              A just energy transition can help Nigeria, and by extension, African countries achieve greater income
              redistribution while also ensuring that climate action takes place in tandem with development.</p>
          </div>
        </div>

        <BottomForm />

        <footer className="bg-grey-700 h-auto pt-10 mt-20" style={{ borderTop: "1px solid black" }}>
          <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1 mb-6 text-black">
                <a
                  className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  {/* <!--Icon from: http://www.potlabicons.com/ --> */}

                  LANDING
                </a>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >FAQ</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Help</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Support</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Terms</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Facebook</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Linkedin</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Official Blog</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >About Us</a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
