import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-center text-white sxn bottom-0">
      <div className="w-full border-b-2 py-3 pb-1 border-slate-400 flex justify-between">
        <h1 className="text-xl">M.I.A</h1>
        <p className="hover:text-green-500 cursor-pointer">
          <WhatsApp className="text-green-500" /> +256703609866
        </p>
        {/* social icons */}
        <div className="flex">
          <a href="https://www.facebook.com/311324272063132">
            <Facebook className="hover:text-blue-700 cursor-pointer text-3xl" />
          </a>
          <a href="https://www.instagram.com/miamediia">
            <Instagram className="hover:bg-gradient-to-r from-red-700 to-blue-700 cursor-pointer rounded-full text-3xl " />
          </a>
        </div>
      </div>
      <p className="my-3">Copyright &copy; 2024. MIA | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
