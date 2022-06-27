import React from 'react'

const ImageText = () => {
  return (
    <div className="pt-34 pl-6 bg-gray-100 flex justify-center">
      <div className="container px-3 mx-12  my-12 flex flex-wrap flex-col md:flex-row text-black">
        <div className=" flex w-full md:w-3/5 py-6 justify-start ">
          <img className="w-full md:w-4/5 z-10" src="/images/PYO-127.jpg" />
        </div>
        <div className="flex flex-col w-full md:w-2/5 justify-end items-start text-center md:text-left">
          <p className="tracking-loose w-full uppercase font-thin">
            It is time for a new tribe!
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            PROFESSOR YEMI OSINBAJO Institute
          </h1>
          <p className="leading-normal text-2xl mb-8">
            will bring together supporters of PYO as one unit, establishing
            engagements for every demographic and age group.
          </p>
          <input
            className="mx-auto lg:mx-0 hover:underline bg-gray-100 text-gray-800 font-bold rounded-5 my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            type="button"
            value="Find Out More"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageText;