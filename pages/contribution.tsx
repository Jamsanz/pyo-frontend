import React, { useRef } from "react";
import BottomForm from "../components/bottomForm";
import GalleryForm from "../components/galleryForm";
import Layout from "../components/layout";
import SectorContribution from "../components/sectorContribution";
import ImpactForm from "../components/impactForm";
import ProfileCarousel, { Profile } from "../components/profileCarousel";
import MessageCarousel from "../components/messageCarousel";

const Contribution = () => {

  
  return (
    <Layout>
      <div
        className="pt-[15rem] md:pt-[9rem] object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
        style={{
          background: "url('/images/contribution.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container pr-[10%] pl-[4rem] pt-0 md:pt-[10rem] lg:pt-[15rem] mx-auto flex flex-wrap flex-col md:flex-row items-start justify-start text-white pb-36">
          <div className="flex flex-col w-full md:w-[70%] xl:w-[45%] justify-center items-start text-left ">
            <h1 className="text-3xl leading-tight md:leading-loose lg:text-5xl m-auto font-bold text-left merriFont">
              Prof Yemi Osinbajo's ​sector specific ​contributions
            </h1>
          </div>
        </div>
      </div>

      <div className="py-4 bg-[#53575B]" id="about">
        <div className="container px-3 mx-auto text-black">
          <h1
            className="my-8 text-2xl md:text-5xl leading-tight text-[#fff]
             md:px-5 text-center momoFont italic"
          >
            "The movement for a new Nigeria has only just started" ~ Yemi
            Osinbajo
          </h1>
        </div>
      </div>
      <ProfileCarousel />
      <SectorContribution />
      <ImpactForm />
      <MessageCarousel />
    </Layout>
  );
};

export default Contribution;
