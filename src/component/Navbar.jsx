import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200/50 bg-white/80 transition-all duration-300">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-3xl font-bold tracking-wide text-gray-800 cursor-pointer"
              >
                TANIM
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-8 text-[14px] font-medium text-gray-600">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70} // adjust for fixed navbar
                      spy={true}   // track active link
                      className="hover:text-black transition-colors duration-300 relative group cursor-pointer"
                      activeClass="text-black font-semibold"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
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
                {isOpen ? <HiX className="w-8 h-8" /> : <HiMenuAlt3 className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden fixed top-[70px] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-8 gap-6 text-[16px] font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 hover:text-black hover:bg-gray-50/50 transition-all duration-300 rounded-lg mx-8 cursor-pointer"
                  spy={true}
                  activeClass="text-black font-semibold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[70px]"></div>
    </>
  );
};

export default Navbar;
