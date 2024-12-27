import { useState } from "react";
import { Link } from "react-scroll";
import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { DecodedUser } from "@/types/types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<DecodedUser | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse || !credentialResponse.credential) {
        throw new Error("Error with credentials");
      }
      const decodedUser: DecodedUser = jwtDecode(credentialResponse.credential);
      setUser(decodedUser);
      console.log("User logged in:", decodedUser);
    } catch (error: unknown) {
      console.error("Error decoding the user:", error);
    }
  };

  const handleLogInError = () => console.log("Login failed");

  const handleLogOut = () => {
    console.log("User logging out:", user);
    googleLogout();
    setUser(null);
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 py-2">
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
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-8 text-lg font-medium absolute md:relative top-24 md:top-auto left-22  bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
      >
        {["home", "benefits", "classes", "contact"].map((section) => (
          <li
            key={section}
            className="cursor-pointer text-center md:text-left hover:text-blue-600 transition-colors duration-300"
          >
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* User & Call-to-Action Section */}
      <div className="flex items-center gap-4 p-4  ">
        {user ? (
          <div className="relative inline-block">
            <img
              width={32}
              height={32}
              src={user.picture}
              alt={user.name}
              style={{ borderRadius: "50%", cursor: "pointer" }}
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg"
                style={{ zIndex: 1000 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-2 text-sm">
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <hr />
                <button
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLogInError}
            theme="outline"
            size="medium"
            text="signin"
            shape="pill"
          />
        )}
        <button className="px-6 py-2 border hover:bg-white hover:border-blue-600 hover:text-blue-600 font-bold rounded-full bg-blue-600 text-white transition-all duration-300">
          Become a Member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
