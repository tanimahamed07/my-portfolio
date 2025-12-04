import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../page/Home/Banner";
import AboutSection from "../page/Home/AboutSection";
import Skills from "../page/Home/Skills";
import Contact from "../page/Home/Contact";
import Footer from "../page/Home/Footer";

const Root = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <Skills></Skills>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
