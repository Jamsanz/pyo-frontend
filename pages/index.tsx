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
import { handleScroll, IReadMore, pyoFellowship, pyoInstitute, readMore, readMoreInstitute } from "../utils/utils";

const Home: NextPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [show, setShow] = useState<boolean>(false)
  const [showInitiative, setShowInitiative] = useState<boolean>(false);

  const [moreText, setMoreText] = useState<IReadMore>();
  const [moreTextInitiative, setMoreTextInitiative] = useState<IReadMore>();

  

  let readMoreText: IReadMore[]
  let readMoreTextInitiative: IReadMore[];

  
  const showMore = (id: number) => {
    setShow(true)
    console.log(show)
    readMoreText = readMore?.filter((item: any) => item.id === id)?.map((data: any) => data)
    setMoreText(readMoreText?.pop())
    console.log(moreText)
   return readMoreText
  }
  const showMoreInitiative = (id: number) => {
    setShowInitiative(true);
    readMoreTextInitiative = readMoreInstitute
      ?.filter((item: any) => item.id === id)
      ?.map((data: any) => data);
    setMoreTextInitiative(readMoreTextInitiative?.pop());
    return readMoreTextInitiative;
  };
  return (
    <Layout>
      <div
        className="pt-36 pb-24 object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
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
            <p className="tribe italic text-left text-[40px] lg:text-3xl monoFont">
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
            <p className="mb-4 text-lg text-[white] font-[400] leading-[1.5rem] text-justify">
              As a unifying platform for the exchange of knowledge and mutual
              learning, the Prof. Yemi Osinbajo Institute brings together all
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
        <h1 className=" pt-10 md:pt-0 px-0 md:px-20 md:my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#000]">
          Fellowship Programmes
        </h1>
        <div className="pb-8 border-b-[1px] border-b-solid border-b-[#000] container  mx-auto flex flex-wrap flex-col md:flex-row text-black">
          {pyoFellowship?.map((data) => {
            return (
              <div
                className=" w-100% md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-8 text-[#000] text-left"
                key={data?.id}
              >
                <h3 className="monoFont text-xl text-center mx-auto pb-[20px]">
                  {data?.title}
                </h3>
                <div className="text-center mx-auto">
                  <img
                    src={data?.images}
                    width="100%"
                    height="70px"
                    className="rounded-lg mb-[20px] boxShadow2"
                  />
                </div>
                <span className="text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                  {data?.text1}
                </span>
                {show ? (
                  <>
                    <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                      {moreText?.id === data?.id && moreText?.text2}
                    </p>
                    <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                      {moreText?.id === data?.id && moreText?.text3}
                    </p>
                  </>
                ) : (
                  ""
                )}

                {moreText?.id === data?.id && show ? (
                  <span
                    className="cursor-pointer text-lg text-[#000] font-[400] leading-[1.5rem] text-center"
                    onClick={() => setShow(!show)}
                  >
                    <p className="mt-2 text-[17px] font-bold text-black text-left transform transition hover:text-[#14084e] duration-300 ease-in-out">
                      Show less
                    </p>
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-lg text-[#14044E] font-[400] leading-[1.5rem] "
                    onClick={() => showMore(data?.id!)}
                  >
                    <p className={`${show? "-mt-4" : ""} text-[17px] font-bold text-black transform transition hover:text-[#14084e] duration-300 ease-in-out`}>
                      Continue reading ...
                    </p>
                  </span>
                )}

                <div className="text-center m-auto"></div>
              </div>
            );
          })}

          
          <div className="text-center mx-auto">
            <Link href="#members">
              <button
                type="button"
                className="bg-[#000] text-[18px] text-[#fff] rounded-lg lg:mx-0px-6 py-3 px-8 font-bold shadow my-6  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex-1 hover:bold"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:px-24 bg-[#fff] text-center mx-uato">
        <h1 className=" px-0 md:px-20 my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#000]">
          Latest Initiatives from the PYO Institute
        </h1>
        <div className="pb-8 container px-3 mx-auto flex flex-wrap flex-col md:flex-row text-black border-b-[1px] border-b-solid border-b-[#000]">
          {pyoInstitute?.map((item) => {
            return (
              <div
                className=" w-100% md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-5 text-[#000] text-justify"
                key={item?.id}
              >
                <h3 className="monoFont text-[18px]  text-center mx-auto pb-[20px] uppercase">
                  {item?.title}
                </h3>
                <div className="w-full text-center mx-auto">
                  <img
                    src={item?.images}
                    width="100%"
                    height="70px"
                    className="rounded-lg mb-[20px] boxShadow2"
                  />
                </div>
                <p className="text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                  {item?.text1}
                </p>
                {showInitiative ? (
                  <>
                    <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                      {moreTextInitiative?.id === item?.id &&
                        moreTextInitiative?.text2}
                    </p>
                    <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                      {moreTextInitiative?.id === item?.id &&
                        moreTextInitiative?.text3}
                    </p>
                  </>
                ) : (
                  ""
                )}

                {moreTextInitiative?.id === item?.id && showInitiative ? (
                  <span
                    className="cursor-pointer text-lg text-[#000] font-[400] leading-[1.5rem] text-center"
                    onClick={() => setShowInitiative(!showInitiative)}
                  >
                    <br />
                    <p className="-mt-4 text-[17px] font-bold text-black text-left transform transition hover:text-[#14084e] duration-300 ease-in-out">
                      Show less
                    </p>
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-lg text-[#14044E] font-[400] leading-[1.5rem]"
                    onClick={() => showMoreInitiative(item?.id!)}
                  >
                    <p
                      className={`${
                        showInitiative ? "-mt-4" : ""
                      } text-[17px] font-bold text-black transform transition hover:text-[#14084e] duration-300 ease-in-out`}
                    >
                      Continue reading ...
                    </p>
                  </span>
                )}

                <div className="text-center m-auto"></div>
              </div>
            );
          })}
          
          
          <div className="text-center m-auto ">
            <Button gray text="Coming Soon" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
