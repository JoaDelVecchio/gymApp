import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Burger Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}

      <ul
        className={`mr-3 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-12 text-lg font-medium tracking-wide text-black absolute md:relative top-20 left-0 w-full bg-white md:bg-transparent md:top-auto md:left-auto md:w-auto p-6 md:p-0 shadow-md md:shadow-none`}
      >
        {["home", "benefits", "classes", "contact"].map((section) => (
          <li key={section} className="cursor-pointer text-center md:text-left">
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="block md:inline hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close menu after clicking
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col gap-4 lg:flex-row hidden md:flex items-center lg:gap-8">
        <button className="px-6 py-2 border border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Sign In
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300">
          Become a Member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
