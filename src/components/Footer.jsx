"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,     // ✅ fixed
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.webp" alt="Leo Logo" className="w-10 h-10" />
            <h2 className="text-lg font-semibold text-white">Leo Club of SLTC</h2>
          </div>
          <p className="text-sm">
            Lions International, District 306 D2
          </p>
          <p className="text-sm mt-3">
            Fueling leadership. Empowering youth. Leo Club of SLTC stands tall as a trailblazer in Leo District 306 D2 and Leo Multiple District 306, delivering years of impact, innovation, and excellence. Join the pride that shapes tomorrow!
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © 2019–2025 Leo Club of SLTC.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <Link to="/contact" className="inline-block">
            <h3 className="text-white font-semibold mb-3 hover:text-blue-300 transition-colors cursor-pointer">Reach Us →</h3>
          </Link>
          <p className="text-sm">
            WhatsApp: <span className="text-gray-400">+94 70 XXX XXXX</span>
          </p>
          <p className="text-sm">
            Email: <span className="text-gray-400">leo@sltc.ac.lk</span>
          </p>
          <p className="text-sm">
            Address: <span className="text-gray-400">SLTC, Padukka, Sri Lanka</span>
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Socials</h3>
          <div className="flex flex-wrap gap-4 text-xl">
            <a href="https://facebook.com/leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400 transition-colors touch-manipulation"><FaFacebookF /></a>
            <a href="https://instagram.com/leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-pink-400 transition-colors touch-manipulation"><FaInstagram /></a>
            <a href="https://tiktok.com/@leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors touch-manipulation"><FaTiktok /></a>
            <a href="https://twitter.com/leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors touch-manipulation"><FaTwitter /></a>
            <a href="https://youtube.com/@leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-red-400 transition-colors touch-manipulation"><FaYoutube /></a>
            <a href="https://linkedin.com/company/leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-500 transition-colors touch-manipulation"><FaLinkedinIn /></a>
            <a href="https://pinterest.com/leoclubsltc" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-red-500 transition-colors touch-manipulation"><FaPinterestP /></a>
            <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-green-400 transition-colors touch-manipulation"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        All Rights Reserved. Redesigned and Developed by{" "}
        <span className="text-yellow-500">Kaveesha Dilshan.</span>
      </div>
    </footer>
  );
}
