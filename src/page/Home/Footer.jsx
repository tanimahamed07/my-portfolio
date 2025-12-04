import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col footer-center bg-white text-base-content p-10 mt-10 w-full z-50 backdrop-blur-md border-t border-gray-200/50 transition-all duration-300">
      {/* Social Icons Section */}
      <nav>
        <div className="grid grid-flow-col gap-3">
          
          {/* Twitter Icon */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-500 p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-500 p-3 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>

          {/* GitHub Icon */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-500 p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>

        </div>
      </nav>

      {/* Copyright Text Section */}
      <aside>
        <p className="font-medium text-sm">
          © 2024 Copyright: Tanim Ahamed
        </p>
      </aside>
    </footer>
  );
};

export default Footer;