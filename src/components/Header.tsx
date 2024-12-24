import Navbar from "./Navbar";
import JymLogo from "@/assets/Jymlogo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed top-0 w-full py-6 px-12 bg-gray-900 text-white z-50 shadow-md">
      {/* Logo */}
      <img className="w-32" src={JymLogo} alt="Jym logo" />

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
