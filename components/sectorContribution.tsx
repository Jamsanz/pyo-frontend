import React, { useState } from "react";
import { sectSpecific } from "../utils/constant";

const SectorContribution = () => {
  const [show, setShow] = useState<boolean>(false);

  const [moreText, setMoreText] = useState<any>();

  let readMoreText: any;

  const showMore = (id: number) => {
    setShow(true);
    readMoreText = sectSpecific
      ?.filter((item: any) => item.id === id)
      ?.map((data: any) => data);
    setMoreText(readMoreText?.pop());
    console.log(moreText);
    return readMoreText;
  };

  return (
    <div className="lg:px-24 bg-[#fff] text-center mx-uato mt-8 md:mt-24">
      <h1 className=" px-5 md:px-20 my-4 pb-5 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#000]">
        Sector-specific contributions
      </h1>

      <div className="pb-8 container mx-auto flex flex-wrap flex-col md:flex-row text-black border-b-[1px] border-b-solid border-b-[#000] justify-center">
        {sectSpecific.map((data: any) => {
          return (
            <div id={data?.id} className="w-full md:w-3/6 xl:w-2/6 pt-4 pb-8 align-middle  px-2 md:px-8 text-[#000] text-left">
              <div className="w-full text-center mx-auto">
                <img
                  src={data?.img}
                  className="rounded-lg mb-[20px] boxShadow2 w-[95%] mx-auto"
                />
              </div>
              <h3 className="monoFont text-[22px] font-bold text-center mx-auto md:pb-0 h-auto md:h-16">
                {data?.title}
              </h3>
              <span className="pt-2 text-[16px] text-[#000] font-[400] leading-[1.5rem] text-justify">
                {data?.text1.substring(0, 220)}

                {show && (
                  <span>
                    {moreText?.id === data?.id &&
                      moreText?.text1?.substrin(
                        220,
                        moreText?.text1.length - 1
                      )}
                  </span>
                )}
              </span>

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
                  <span className="text-[17px] font-bold text-black transform transition hover:text-[#14084e] duration-300 ease-in-out">
                    &nbsp; ...continue reading ...
                  </span>
                </span>
              )}

              <div className="text-center m-auto"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorContribution;
