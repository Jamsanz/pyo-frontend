import React from 'react'

  
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
            <p className="uppercase text-[#53575B] md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-[#53575B] md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-[#53575B] md:mb-6">Social</p>
            <div className="list-reset mb-6 flex justify-start gap-3">
              <div className="mt-2divndivne-block mr-2 md:block md:mr-0">
                <a
                  href=""
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
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
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
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
                  className="no-underline hover:underline text-gray-800 hover:text-[#53575B]"
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
}

export default Footer;