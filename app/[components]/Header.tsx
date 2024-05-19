import { Breadcrumbs } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 sticky top-0">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">M.I.A</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <Breadcrumbs />
            </button>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
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
                href="/about"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
