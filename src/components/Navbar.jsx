import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // eslint-disable-line

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Project", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200/50 bg-white/80 transition-all duration-300">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      spy={true}
                      className="hover:text-black transition-colors duration-300 relative group cursor-pointer"
                      activeClass="text-black font-semibold"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                      </motion.span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
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
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden fixed top-16 sm:top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
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
                  className="block py-2 sm:py-3 hover:text-black hover:bg-gray-50/50 transition-all duration-300 rounded-lg mx-4 sm:mx-8 cursor-pointer"
                  spy={true}
                  activeClass="text-black font-semibold"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
