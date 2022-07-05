import React, { useEffect } from "react";
import { handleScroll } from "../utils/utils";
import BottomForm from "./bottomForm";
import Footer from "./footer";
import Header from "./header";


const Layout = (props: any) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
      <div
        className="leading-normal tracking-normal text-white gradient merrifont"
        style={{ fontFamily: "Merriweather, sans - serif" }}
        onScroll={handleScroll}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
  );
};

export default Layout;
