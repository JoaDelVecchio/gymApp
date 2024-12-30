// components/Footer.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-4 bg-blue-600 text-gray-200 py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Jym. All rights reserved.
      </p>
      <a
        href="https://instagram.com/Jym" // No Real
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </footer>
  );
};

export default Footer;
