import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Banner from "../pages/Home/Banner";
import AboutSection from "../pages/Home/AboutSection";
import Skills from "../pages/Home/Skills";
import Contact from "../pages/Home/Contact";
import Footer from "../pages/Home/Footer";
import ProjectSection from "../pages/Home/ProjectSection";
import LoadingScreen from "../components/LoadingScreen";

const Root = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="max-w-[1000px] mx-auto px-0">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Skills></Skills>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Root;
