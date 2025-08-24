import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.webp" alt="Leo Logo" className="h-10 w-10 hover:opacity-80 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isActive("/")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isActive("/about")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
            <Link
              to="/newspaper"
              className={`px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isActive("/newspaper")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Newspaper
            </Link>
            <Link
              to="/projects"
              className={`px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isActive("/projects")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isActive("/contact")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-300 transform hover:scale-110"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md border-t border-white/10">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                isActive("/")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                isActive("/about")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
            <Link
              to="/newspaper"
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                isActive("/newspaper")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Newspaper
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                isActive("/projects")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                isActive("/contact")
                  ? "text-blue-300 bg-white/20 shadow-md"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;