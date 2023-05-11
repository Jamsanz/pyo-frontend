import React, { useEffect } from "react";
import { handleScroll } from "../utils/utils";
import BottomForm from "./bottomForm";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

const Layout = (props: any) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head></Head>
      <div
        className="leading-normal tracking-normal text-white gradient"
        style={{ fontFamily: "Gelasio, sans - serif" }}
        onScroll={handleScroll}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
