import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { BiBriefcase, BiCodeAlt } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import image2 from "../../assets/Untitled_design-removebg-preview.png";

const banner = () => {
  return (
    <div className="lg:pt-20 pb-12 sm:pt-12 sm:pb-[50px] overflow-x-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Social Icons - Mobile: Bottom, Desktop: Left */}
          <div className="flex lg:flex-col gap-6 items-center justify-center lg:justify-start lg:col-span-1 text-2xl sm:text-xl text-gray-700 order-3 lg:order-none mt-6 lg:mt-0">
            <a
              href="#"
              className="hover:text-black hover:-translate-y-1 transition-all duration-300 bg-white p-4 sm:p-3 rounded-full shadow-sm border border-gray-100 lg:border-none lg:shadow-none lg:bg-transparent"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-black hover:-translate-y-1 transition-all duration-300 bg-white p-4 sm:p-3 rounded-full shadow-sm border border-gray-100 lg:border-none lg:shadow-none lg:bg-transparent"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-black hover:-translate-y-1 transition-all duration-300 bg-white p-4 sm:p-3 rounded-full shadow-sm border border-gray-100 lg:border-none lg:shadow-none lg:bg-transparent"
            >
              <FaGithub />
            </a>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-none pt-6 lg:pt-0">
            <h3 className="text-xl sm:text-xl font-semibold text-gray-800 flex items-center justify-center lg:justify-start gap-2">
              Hey, I'm
            </h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mt-2 mb-3">
              Tanim Ahamed{" "}
              <span className="inline-block animate-pulse origin-bottom-right">
                👋
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-4 sm:mb-6">
              I am a Web Developer
            </h2>

            <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base sm:text-base mb-6 sm:mb-8 leading-relaxed">
              🚀 Turning ideas into Stunning Websites 💻{" "}
              <br className="hidden sm:block" />
              <span className="mt-1 block sm:inline">
                | Available for projects and collaborations 🌟
              </span>
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="btn bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-10 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl font-medium transition-all text-base sm:text-base active:scale-95">
                Say Hello <FaTelegramPlane className="text-lg sm:text-xl" />
              </button>
            </div>
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
                  src={image2} // নিশ্চিত করুন image2 আপনার কোডে ইম্পোর্ট করা আছে
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
      <div className="pt-12 sm:pt-20 flex items-center justify-center lg:justify-start lg:pl-[120px] text-gray-500 text-sm font-medium animate-bounce cursor-pointer">
        <BsMouse className="text-2xl sm:text-4xl mr-2" /> Scroll Down
      </div>
    </div>
  );
};

export default banner;
