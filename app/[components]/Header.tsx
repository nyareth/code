import { Facebook, Instagram } from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">M.I.A</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="/about"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="blocTestimonials-4 py-2 text-white bg-gray-900 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    // <div className="flex top-0 py-3 flex-wrap justify-around items-center w-full sticky bg-gray-900 ">
    //   <h1 className="text-lg font-semibold font-sans">
    //     <a href="/">MIA Media</a>
    //   </h1>
    //   <ul className="flex gap-[40px] text-m">
    //     <li>
    //       <a href="https://www.facebook.com/311324272063132">
    //         <Facebook className="hover:text-blue-700 cursor-pointer text-3xl" />
    //       </a>
    //       <a href="https://www.instagram.com/miamediia">
    //         <Instagram className="hover:bg-gradient-to-r from-red-700 to-blue-700 cursor-pointer rounded-full text-3xl " />
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;
