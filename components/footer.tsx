import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-white h-auto pt-10 "
      style={{ borderTop: "1px solid black" }}
    >
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <img src="/images/logo.jpeg" width="200px" />
          </div>
          <div className="flex-1">
            <h4 className="uppercase text-[#464646] font-bold text-[18px] md:mb-2">
              Links
            </h4>
            <div className="h-[1px] bg-[#cecece] w-[80%] mb-4"></div>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="uppercase text-[#464646] font-bold text-[18px] md:mb-2">
              Legal
            </h4>
            <div className="h-[1px] bg-[#cecece] w-[80%] mb-4"></div>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="uppercase text-[#464646] font-bold text-[18px] md:mb-2">
              Social
            </h4>
            <div className="h-[1px] bg-[#cecece] w-[80%] mb-4"></div>
            <div className="list-reset mb-6 flex justify-start gap-3">
              <div className="mt-2divndivne-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  <img
                    src="images/facebook.svg"
                    width="30px"
                    className="hover:scale-110"
                  />
                </a>
              </div>
              <div className="inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  <img
                    src="images/instagram.svg"
                    width="30px"
                    className="hover:scale-110"
                  />
                </a>
              </div>
              <div className="inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline text-gray-800 hover:text-[#b1803c]"
                >
                  <img
                    src="images/twitter.png"
                    width="30px"
                    className="hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
