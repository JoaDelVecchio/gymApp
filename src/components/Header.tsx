import JymLogo from "@/assets/Jymlogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white text-black py-4 px-6 md:px-12 flex items-center justify-between z-50 shadow-md gap-7">
      {/* Logo */}
      <img className="w-20 md:w-28" src={JymLogo} alt="Jym logo" />

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
