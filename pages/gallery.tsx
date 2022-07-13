import React from "react";
import GalleryForm from "../components/galleryForm";
import Layout from "../components/layout";
import { gallery, siteUrl } from "../utils/constant";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Gallery, Item } from "react-photoswipe-gallery";

const GalleryBox = () => {
  const shareUrl = `${siteUrl}/gallery`;
  console.log(shareUrl);
  return (
    <Layout>
      <div
        className="pt-[5rem] pb-5 md:pt-[15rem] md:pb-10 md:py-[9rem] object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
        style={{
          background: "url('/images/messagehero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="container  pr-[5%] md:pr-[10%] pl-[5rem] pt-[5rem] md:pt-[10rem] mx-auto flex flex-wrap flex-col md:flex-row items-start justify-start text-white pb-36">
          <div className="flex flex-col w-full md:w-[100%] xl:w-[40%] justify-center items-start text-left ">
            <h1 className="text-[40px] leading-tight lg:text-8xl m-auto font-bold text-left">
              Message Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-2 flex md:mx-10 mt-20 pb-20 flex-wrap h-auto border-black border-b-[1px] border-solid">
        {gallery.map((item: any, index: number) => {
          const { images, id } = item;
          return (
            <div
              key={id}
              className="w-full p-[5px] border-solid border-[1px] border-[#000] shadow-md  mx-[2%] hover:cursor-pointer mb-[30px] mt-[50px] rounded-lg relative"
            >
              <div className="flex flex-wrap w-[100%] ">
                <Gallery id={id}>
                  <ul className="inline-flex space-x-3 mt-2 absolute -top-[50px]">
                    <FacebookShareButton
                      url={shareUrl}
                      quote="PYO Institute Message Gallery"
                      hashtag="pyoinstitute"
                    >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                  </ul>
                  {images.map((item: any, index: any) => {
                    return (
                        <div key={index} className=" w-[50%]">
                          <Item
                            original={item.img}
                            thumbnail={item.img}
                            width={item.width}
                            height={item.height}
                            cropped={true}
                          >
                            {({ ref, open }: any) => (
                              <div className=" bg-black">
                                <img
                                  ref={ref}
                                  onClick={open}
                                  alt=""
                                  src={item.img}
                                />
                              </div>
                            )}
                          </Item>
                        </div>
                    );
                  })}
                </Gallery>
              </div>
            </div>
          );
        })}
      </div>

      <GalleryForm />
    </Layout>
  );
};

export default GalleryBox;
