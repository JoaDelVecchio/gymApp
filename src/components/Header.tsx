import JymLogo from "@/assets/Jymlogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white text-black py-4 px-12 flex items-center justify-between z-50 shadow-md gap-7">
      {/* Logo */}
      <img className="w-28" src={JymLogo} alt="Jym logo" />

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
