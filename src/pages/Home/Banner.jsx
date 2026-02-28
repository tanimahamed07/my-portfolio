import React, { useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { BiBriefcase, BiCodeAlt } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { motion } from "framer-motion"; // eslint-disable-line
import { gsap } from "gsap";
import { Link } from "react-scroll";
import image2 from '../../assets/Untitled_design-removebg-preview.png'

const Banner = () => {
  const imageRef = useRef(null);
  const floatingRef = useRef([]);

  const handleSayHello = () => {
    window.location.href =
      "mailto:tanimislamt@gmail.com?subject=Hello!&body=Hi Tanim, I would like to connect with you.";
  };

  useEffect(() => {
    // GSAP animation for floating elements
    floatingRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -15,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    // Image scale animation
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }
  }, []);
  return (
    <div
      id="home"
      className="pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 overflow-x-hidden bg-[#FAFAFA]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Social Icons - Mobile: Bottom, Desktop: Left */}
          <motion.div
            className="flex lg:flex-col gap-6 items-center justify-center lg:justify-start lg:col-span-1 text-2xl sm:text-xl text-gray-700 order-3 lg:order-none mt-6 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/tanim-ahamed/" },
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/tanim.123888",
              },
              { Icon: FaGithub, href: "https://github.com/tanimahamed07" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:-translate-y-1 transition-all duration-300 bg-white p-4 sm:p-3 rounded-full shadow-sm border border-gray-100 lg:border-none lg:shadow-none lg:bg-transparent"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-none pt-6 lg:pt-0">
            <motion.h3
              className="text-xl sm:text-xl font-semibold text-gray-800 flex items-center justify-center lg:justify-start gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hey, I'm
            </motion.h3>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mt-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tanim Ahamed{" "}
              <motion.span
                className="inline-block origin-bottom-right"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl font-medium text-gray-700 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I am a Web Developer
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base sm:text-base mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              🚀 Turning ideas into Stunning Websites 💻{" "}
              <br className="hidden sm:block" />
              <span className="mt-1 block sm:inline">
                | Available for projects and collaborations 🌟
              </span>
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={handleSayHello}
                className="btn bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-10 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl font-medium transition-all text-base sm:text-base relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10 flex items-center gap-3"
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Say Hello
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaTelegramPlane className="text-lg sm:text-xl" />
                  </motion.span>
                </motion.span>

                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ opacity: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start order-1 lg:order-none py-8 lg:py-0">
            <div className="relative z-10 scale-[0.95] sm:scale-100">
              {/* Main Image Frame */}
              <div
                className="w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] overflow-hidden 
            border-4 border-white shadow-2xl bg-gray-200
            rounded-tl-[100px] rounded-tr-[70px] rounded-br-[100px] rounded-bl-[70px] mx-auto"
              >
                <img
                  src={image2}
                  alt="Tanim Ahamed"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements (unchanged) */}
              <div className="absolute top-6 -right-4 sm:top-10 sm:-right-10 bg-white p-2 sm:p-3 rounded-full shadow-lg flex items-center gap-2 transform rotate-12 transition-all duration-300 hover:scale-105 hover:rotate-6 z-20">
                <BiCodeAlt className="text-xl sm:text-2xl text-gray-700" />
                <div className="text-right">
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-none sm:leading-tight">
                    Command + c
                  </p>
                </div>
              </div>

              <div className="absolute top-1/3 -right-8 sm:-right-16 bg-white p-2 sm:p-3 rounded-xl shadow-2xl flex items-center gap-3 animate-pulse z-10">
                <BiCodeAlt className="text-xl sm:text-2xl text-gray-700" />
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-none sm:leading-tight">
                    Command + v
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 -left-2 sm:-left-6 bg-white p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-3 transform -rotate-6 transition-all duration-300 hover:scale-105 hover:rotate-0 z-20">
                <AiOutlineFire className="text-xl sm:text-2xl text-orange-500" />
                <div>
                  <p className="font-bold text-sm sm:text-lg text-gray-800 leading-none">
                    Bug Fix
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Console.log('Solved')
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <Link
        to="footer"
        smooth={true}
        duration={3500}
        offset={0}
        className="pt-12 sm:pt-20 flex items-center justify-center lg:justify-start lg:pl-[120px] text-gray-500 text-sm font-medium cursor-pointer hover:text-gray-700 transition-colors"
      >
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <BsMouse className="text-2xl sm:text-4xl mr-2" /> Scroll Down
        </motion.div>
      </Link>
    </div>
  );
};

export default Banner;
