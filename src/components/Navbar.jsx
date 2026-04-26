import { useState } from "react";
import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiMail,
} from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home", Icon: HiHome },
  { name: "About", to: "about", Icon: HiUser },
  { name: "Skills", to: "skills", Icon: HiCode },
  { name: "Project", to: "portfolio", Icon: HiBriefcase },
  { name: "Contact", to: "contact", Icon: HiMail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Vertical Navbar - Left Side */}
      <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <motion.div
          className="flex flex-col gap-6 bg-white/80 backdrop-blur-md rounded-full py-6 px-3 shadow-lg border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="group relative flex items-center justify-center cursor-pointer"
                activeClass="active-nav-link"
              >
                <motion.div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.Icon className="text-lg" />
                </motion.div>

                {/* Tooltip */}
                <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {link.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200/50 bg-white/80 transition-all duration-300">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-2xl sm:text-3xl font-bold tracking-wide text-gray-800 cursor-pointer hover:scale-105 transition-transform inline-block"
              >
                TANIM
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100/50 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <HiMenuAlt3 className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed top-16 sm:top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-6 sm:py-8 gap-4 sm:gap-6 text-base font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="w-full text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-2 sm:py-3 hover:text-black hover:bg-gray-50/50 transition-all duration-300 rounded-lg mx-4 sm:mx-8 cursor-pointer"
                  spy={true}
                  activeClass="text-black font-semibold"
                >
                  <link.Icon className="text-xl" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer for mobile navbar */}
      <div className="lg:hidden h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
