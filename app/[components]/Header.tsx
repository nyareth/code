import React from "react";

const Header = () => {
  return (
    <div className="flex top-0 py-3 flex-wrap justify-around items-center w-full sticky bg-gray-950 ">
      <h1 className="text-lg font-semibold font-sans">MIA Media</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
          <button className="action">Home</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
