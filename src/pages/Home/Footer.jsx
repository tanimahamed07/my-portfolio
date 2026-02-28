import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/tanim.123888",
      hoverColor: "hover:bg-[#1877f2]",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/tanim-ahamed/",
      hoverColor: "hover:bg-[#0077b5]",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/tanimahamed07",
      hoverColor: "hover:bg-black",
    },
  ];

  return (
    <footer
      id="footer"
      className="footer flex flex-col footer-center bg-white text-base-content p-10 mt-10 w-full z-50 backdrop-blur-md border-t border-gray-200/50 transition-all duration-300"
    >
      {/* Social Icons Section */}
      <nav>
        <div className="grid grid-flow-col gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-gray-500 p-3 rounded-full ${social.hoverColor} hover:text-white transition-all duration-300`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.Icon className="text-xl" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Copyright Text Section */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-medium text-sm">© 2024 Copyright: Tanim Ahamed</p>
      </motion.aside>
    </footer>
  );
};

export default Footer;
