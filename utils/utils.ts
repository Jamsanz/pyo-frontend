import axios from "axios";

let baseURL =
  process.env.NODE_ENV !== "development"
 ? "http://localhost:5000"
    : "https://pyo-institute-backend.herokuapp.com/";
export const http = axios.create({
  baseURL,
});

export const handleScroll = () => {
  var header: any = document.getElementById("header");
  var navcontent: any = document.getElementById("nav-content");
  var navaction: any = document.getElementById("navAction");
  var toToggle: any = document.querySelectorAll(".toggleColour");
  /*Apply classNamees for slide in bar*/
  const scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-black");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-black");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-black");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("tex-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
};
