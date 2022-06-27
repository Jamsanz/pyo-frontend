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
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "Source Sans Pro, sans - serif" }}
      onScroll={handleScroll}
    >
      <Header />
      {props.children}
      <BottomForm />
      <Footer />
    </div>
  );
};

export default Layout;
