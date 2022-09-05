import React, { useState } from "react";
import Link from "next/link";
import {
  IReadMore,
  pyoFellowship,
  pyoInstitute,
  readMore,
  readMoreInstitute,
} from "../utils/utils";
import Button from "./button";
import Modal from "./signUpModal";

const PyoFellow = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showLink, setShowLink] = useState<boolean>(false);
  const handleShowModal = (e?: any): void => {
    e?.preventDefault();
    setOpen(!open);
  };
  const [show, setShow] = useState<boolean>(false);
  const [showInitiative, setShowInitiative] = useState<boolean>(false);

  const [moreText, setMoreText] = useState<IReadMore>();
  const [moreTextInitiative, setMoreTextInitiative] = useState<IReadMore>();

  let readMoreText: IReadMore[];
  let readMoreTextInitiative: IReadMore[];

  const showMore = (id: number) => {
    setShow(true);
    readMoreText = readMore
      ?.filter((item: any) => item.id === id)
      ?.map((data: any) => data);
    setMoreText(readMoreText?.pop());
    return readMoreText;
  };
  const showMoreInitiative = (id: number) => {
    setShowInitiative(true);
    readMoreTextInitiative = readMoreInstitute
      ?.filter((item: any) => item.id === id)
      ?.map((data: any) => data);
    setMoreTextInitiative(readMoreTextInitiative?.pop());
    return readMoreTextInitiative;
  };

  return (
    <>
      <div className="pb-8 py-16 bg-[#fff] " id="fellow">
        <div className="text-center w-[250px] m-auto">
          <h1
            className="text-black py-2 text-[30px] md:text-4xl font-bold rounded-lg
        text-center leading-tight bg-[#b1803c]"
          >
            Programmes
          </h1>
        </div>

        <div className="text-center mt-8">
          <div className=" pt-4 pb-8 align-middle  px-2 md:px-8 text-[#000] text-center">
            <h3 className="monoFont border-below text-[22px] font-bold text-center md:pb-0 h-auto md:h-16 mb-4">
              <span>PYO Fellowship</span>
              <small className="text-xs font-light block">Coming soon</small>
            </h3>
          </div>
        </div>

        <div className="md:flex-nowrap  flex-wrap md:w-[75%] w-[95%] text-left mx-auto flex gap-8 justify-start content-center px-0 md:px-16  items-start">
          <div className="text-center mx-auto">
            <img
              src="images/1 4.png"
              alt=""
              className="rounded-lg md:text-center"
            />
          </div>
          <div className=" md:w-[60%] mx-auto text-[16px] text-[#000] w-[100%] font-[400] leading-[1.5rem] text-justify">
            <p className="">
              A proposed one-year fellowship which will be offered on a yearly
              basis is aimed at building a network of high-potential young
              Nigerians who are already making a difference in their
              communities.
            </p>
            <p className="mt-4">
              PYO Fellows program will include creating a sustainable
              opportunity to take their work to the next level through an
              immersive curriculum that combines academic, skills-based, and
              hands-on learning, and providing opportunities for them to rise to
              top leadership positions in the public sector.
            </p>

            <p className="mt-4 text-[20px] text-[#000] font-[300] leading-[1.5rem] text-left tribe italic monoFont">
              For Young Graduates and Professionals, Entrepreneurs, Artisans
              etc.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 ">
          <div className=" pt-4 pb-2 align-middle  px-2 md:px-8 text-[#000] text-center">
            <h3 className="monoFont border-below text-[22px] font-bold text-center md:pb-0 h-auto md:h-16 mb-4">
              <span>PYO New Tribe</span>
              <small className="text-xs font-light block">Coming soon</small>
            </h3>
          </div>
        </div>

        <div className="w-full md:w-[75%] mx-auto px-[3%] md:px-16 mb-8">
          <p className="text-black text-[16px] text-justify">
            Our mission is to advance the social and economic welfare and
            education of Blue and White Collar workers through our continued
            work in organizing units of programmes and grants as a means to
            promote opportunities and skills to embrace technology.
          </p>
        </div>

        <div className="px-[3%] bg-black md:px-[17%] py-[30px] text-[16px]">
          <p className=" text-[#fff] text-justify">
            "Where the First, Second, and Third Industrial Revolutions
            threatened the roles, responsibilities, and livelihoods of
            blue-collar workers, with women being particularly vulnerable, the
            Fourth Industrial Revolution appears to be threatening white-collar
            workers above all, while unlocking the potential for blue-collar
            workers, and females in particular, to carve a new future for
            themselves."
          </p>
          <p className="text-right">-Dr. Lize Barclay</p>
        </div>

        <div className="mt-16">
          <div className="md:flex-nowrap  flex-wrap md:w-[75%] w-[95%] text-left mx-auto flex gap-8 justify-start content-center px-0 md:px-16  items-start">
            <div className="flex flex-col items-center mx-auto">
              <p className="text-[18px] px-[15px] text-center monoFont text-white rounded-lg bg-[#b1803c] mb-[10px] font-bold">
                White Collar
              </p>
              <div className="text-center">
                <img src="images/2 4.png" alt="" className="rounded-lg" />
              </div>
            </div>
            <div className="md:w-[60%] mx-auto text-[16px] text-[#000] w-[100%] font-[400] leading-[1.5rem] text-justify">
              <p className="">
                PYO New Tribe White Collar will bring together various age
                groups and demographics, to create awareness and develop a
                nuanced perspective among Nigerians to tackle challenges in
                various fields in the public and private sectors.
              </p>
              <p className="mt-4">
                The program will establish cells and social clubs in schools and
                universities with the aim of instilling the importance of
                values-based leadership, good governance, and hard work in
                children and young adult professionals. This will also involve
                breakfast meetings and discussion sessions on various
                conversational topics over the next few months. PYO New Tribe
                White Collar will have access to co-create and implement
                projects around sustainable development goals.
              </p>

              <p className="mt-4 text-[20px] text-[#000] font-[300] leading-[1.5rem] text-left tribe italic monoFont">
                For Young Graduates and Professionals (Entrepreneurs, private
                and public sector professionals)
              </p>
            </div>
          </div>

          <div className="my-16  w-[95%] lg:w-[75%] text-center mx-auto">
            <p className="mx-auto text-center w-[150px] text-[18px] px-[15px] monoFont text-white rounded-lg bg-[#000] mb-[10px] font-bold">
              Area of Focus
            </p>

            <div className="flex flex-wrap lg:flex-nowrap">
              {pyoInstitute?.map((item) => {
                return (
                  <div
                    className="w-100% md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-4 text-[#000] text-left"
                    key={item?.id}
                  >
                    <h3 className="underline monoFont text-[22px] font-bold text-center mx-auto md:pb-0 h-auto  mb-1">
                      {item?.title}
                    </h3>
                    <p className="text-[16px] text-[#000] font-[400] leading-[1.5rem] text-justify">
                      {item?.text1}
                    </p>
                    {showInitiative ? (
                      <>
                        <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                          {moreTextInitiative?.id === item?.id &&
                            moreTextInitiative?.text2}
                        </p>
                        {moreTextInitiative?.id === item?.id &&
                        moreTextInitiative?.text4 !== "" ? (
                          <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                            {moreTextInitiative?.id === item?.id &&
                              moreTextInitiative?.text4}
                          </p>
                        ) : (
                          ""
                        )}
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
                        className="cursor-pointer text-lg text-[#14044E] font-[400] leading-[1.5rem] "
                        onClick={() => showMoreInitiative(item?.id!)}
                      >
                        <p
                          className={`${
                            showInitiative ? "-mt-4" : ""
                          } mx-auto text-center w-[120px] px-[15px] py-[5px] monoFont text-white rounded-lg bg-[#000] mb-[10px] text-[17px] font-bold transform  mt-3 transition hover:text-[#fff] duration-300 ease-in-out`}
                        >
                          Learn more
                        </p>
                      </span>
                    )}

                    <div className="text-center m-auto"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto text-center">
          <div className="md:flex-nowrap  flex-wrap md:w-[75%] w-[95%] text-left mx-auto flex gap-8 justify-start content-center px-0 md:px-16  items-start">
            <div className="flex flex-col items-center mx-auto">
              <p className="text-[18px] px-[15px] text-center monoFont text-white rounded-lg bg-[#b1803c] mb-[10px] font-bold">
                Blue Collar
              </p>
              <div className="text-center">
                <img src="images/3 4.png" alt="" className="rounded-lg" />
              </div>
            </div>
            <div className="md:w-[60%] mx-auto text-[16px] text-[#000] w-[100%] font-[400] leading-[1.5rem] text-justify">
              <p className="">
                The PYO New Tribe Blue-Collar will provide funding, skills
                development programmes and capacity building across various blue
                collar demographics such as market women, taxi drivers, okada
                riders, artisans etc.
              </p>
              <p className="mt-4">
                The project will coordinate and support these groups with tools
                and advisory for business development, supporting them with
                their daily businesses while engaging and indoctrinating them
                with the values of the PYO Insititute.
              </p>
              <p className="mt-4">
                The project will also seek to support these groups with loans,
                grants, and equipment for work through non-government
                organizations, loan organizations, UN bodies, etc. The
                beneficiaries will receive various training packages which will
                include selling the values and ideals of PYO Institute.
              </p>

              <p className="mt-4 text-[20px] text-[#000] font-[300] leading-[1.5rem] text-left tribe italic monoFont">
                For Artisans, Market women and men, and workers in the service
                industry (bikes, taxis etc)
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-[30px] w-[150px] text-[18px] px-[15px] py-[5px] monoFont
           text-white rounded-lg bg-[#000] mb-[10px] font-bold"
            onClick={() => setShowLink(true)}
          >
            Apply here
          </button>
          {showLink  ?
            <div className="text-black relative w-[250px] mx-auto text-center mt-1 boxShadow5 pb-4 ">
              <div className="absolute top-0 right-0 m-2 px-2 py-1  hover:bg-[#f2f2f2] hover:rounded-full font-bold">
                <button type="button" onClick={() => setShowLink(false)}>
                  x{" "}
                </button>
              </div>
              <div className="pt-8">
                <Link href="/sponsorship">
                <a href="/sponsorship" className="font-[18px] hover:font-bold">
                  Register as a sponsor
                </a>
                </Link> <br/>
                {/* <Link href="/support">
                  <a
                    href="/support"
                    className="font-[18px] hover:font-bold pb-1"
                  >
                    Apply for financial support
                  </a>
                </Link> */}
              </div>
            </div>
          : ""}
        </div>
      </div>
      <Modal open={open} setOpen={handleShowModal} />
    </>
  );
};

export default PyoFellow;

//old

{
  /* <div className="pb-8 md:py-16 bg-[#fff]" id="fellow">
          <h1 className=" px-5  pt-10 md:pt-0 md:px-20 md:my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-main">
            Fellowship Programmes
          </h1>
          <div className="pb-8 border-b-[1px] border-b-solid border-b-[#000] mx-auto flex flex-wrap flex-col md:flex-row text-black">
            {pyoFellowship?.map((data) => {
              return (
                <div
                  className=" w-100% md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-8 text-[#000] text-left"
                  key={data?.id}
                >
                  <h3 className="monoFont border-below text-[22px] font-bold text-center md:pb-0 h-auto md:h-16 mb-4">
                    <span>{data?.title}</span>
                    <small className="text-xs font-light block">
                      Coming soon
                    </small>
                  </h3>
                  <div
                    className="w-full rounded-lg mb-[20px] boxShadow2 bg-img-box text-center mx-auto"
                    style={{
                      backgroundImage: `url('${data?.images}')`,
                    }}
                  ></div>
                  <span className="text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                    {data?.text1}
                  </span>
                  {show ? (
                    <>
                      <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                        {moreText?.id === data?.id && moreText?.text2}
                      </p>
                      {moreText?.id === data?.id && moreText?.text4 !== "" ? (
                        <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                          {moreText?.id === data?.id && moreText?.text4}
                        </p>
                      ) : (
                        ""
                      )}
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
                      <p
                        className={`${
                          show ? "-mt-4" : ""
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

            <div className="text-center mx-auto">
              <button
                type="button"
                className="bg-[#000] text-[18px] text-[#fff] rounded-lg lg:mx-0px-6 py-3 px-8 font-bold shadow my-6  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex-1 hover:bold"
                onClick={handleShowModal}
              >
                Sign up
              </button>
            </div>
          </div>
        </div> */
}

{
  /* <div className="lg:px-24 bg-[#fff] text-center mx-uato">
          <h1 className=" px-5 md:px-20 my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-main">
            Latest Initiatives from the PYO Institute
          </h1>
          <div className="pb-8 container mx-auto flex flex-wrap flex-col md:flex-row text-black border-b-[1px] border-b-solid border-b-[#000]">
            {pyoInstitute?.map((item) => {
              return (
                <div
                  className="w-100% md:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-8 text-[#000] text-left"
                  key={item?.id}
                >
                  <h3 className="monoFont border-below text-[22px] font-bold text-center mx-auto md:pb-0 h-auto md:h-16 mb-4">
                    {item?.title}
                    <br /> {item?.slug}
                  </h3>
                  <div
                    className="w-full rounded-lg mb-[20px] boxShadow2 bg-img-box text-center mx-auto"
                    style={{
                      backgroundImage: `url('${item?.images}')`,
                    }}
                  ></div>
                  <p className="text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                    {item?.text1}
                  </p>
                  {showInitiative ? (
                    <>
                      <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                        {moreTextInitiative?.id === item?.id &&
                          moreTextInitiative?.text2}
                      </p>
                      {moreTextInitiative?.id === item?.id &&
                      moreTextInitiative?.text4 !== "" ? (
                        <p className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-left">
                          {moreTextInitiative?.id === item?.id &&
                            moreTextInitiative?.text4}
                        </p>
                      ) : (
                        ""
                      )}
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
            </div> */
}
