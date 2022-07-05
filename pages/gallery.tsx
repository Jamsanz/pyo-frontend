import React, { useRef }  from "react";
import BottomForm from "../components/bottomForm";
import GalleryForm from "../components/galleryForm";
import Layout from "../components/layout";
import { gallery } from "../utils/constant";

import { Gallery, Item } from "react-photoswipe-gallery";



const GalleryBox = () => {

  const ref = useRef<HTMLImageElement>()

  return (
    <Layout>
      <div
        className="pt-[15rem] pb-10 md:py-[9rem] object-cover w-[100%] bg-contain bg-center bg-no-repeat merriFont lg:bg-cover"
        style={{
          background: "url('/images/messagehero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container pr-[10%] pl-[5rem] pt-[10rem] mx-auto flex flex-wrap flex-col md:flex-row items-start justify-start text-white pb-36">
          <div className="flex flex-col w-full md:w-[100%] xl:w-[40%] justify-center items-start text-left ">
            <h1 className="text-[40px] leading-tight lg:text-8xl m-auto font-bold text-left">
              Message Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-2 flex md:mx-10 mt-20 pb-20 flex-wrap h-auto border-black border-b-[1px] border-solid">
       
        {gallery.map((item: any) => {
          const { images, id } = item;
          return (
            <div
              key={id}
              className="w-[100%] p-[5px] border-solid border-[1px] border-[#000] shadow-md md:w-[46%] mx-[2%] hover:cursor-pointer mb-[30px] mt-[50px] rounded-lg relative"
            >
              <ul className="inline-flex space-x-3 mt-2 absolute -top-[50px]">
                <a href="">
                  <i className="fa-brands text-[#4064AC] text-xl fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands text-xl text-[#1C9CEA] fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands text-xl text-[#7C47AE] fa-instagram"></i>
                </a>
              </ul>
              <div className="flex flex-wrap w-[100%] content-center justify-center ">
                <Gallery id={id}>
                  {images.map((item: any, index: any) => {
                    return (
                      <>
                        <div key={index} className=" w-[50%]">
                          <Item
                            original={item.img}
                            thumbnail={item.img}
                            width="900"
                            height="550"
                          >
                            {({ ref, open }) => (
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
                      </>
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
