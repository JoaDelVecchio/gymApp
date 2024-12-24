import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* Navigation Links */}
      <ul className="flex items-center gap-12 text-lg font-medium  tracking-wide text-black">
        {["home", "benefits", "classes", "contact"].map((section) => (
          <li key={section} className="cursor-pointer">
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Call-to-Action Buttons */}
      <div className="flex items-center gap-8">
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
