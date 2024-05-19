import Image from "next/image";
import React from "react";

const Villain = () => {
  return (
    <div className="w-full  bg-white">
      <div className="flex items-center justify-between px-40 mb-16  p-10 text-black max-sm:flex-col max-sm:p-2 max-sm:mb-3 max-sm:space-y-2">
        <div className="text-left">
          <h1 className="text-6xl font-bold mars">Ready to Boost Growth?</h1>
          <p>Contact us for personal consultation.</p>
        </div>
        <button className="p-4 h-fit w-[200px] bg-black text-white rounded-full">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
      <div className="flex justify-around items-center ">
        <Image
          className="max-sm:w-20"
          src="/meta.png"
          width={150}
          height={100}
          alt="GPartner"
        />
        <Image
          className="max-sm:w-20"
          src="/GPartner.png"
          width={200}
          height={100}
          alt="GPartner"
        />
        <Image
          className="max-sm:w-20"
          src="/Youtube.png"
          width={200}
          height={100}
          alt="GPartner"
        />
        <Image
          className="max-sm:w-20"
          src="/tmp.png"
          width={200}
          height={100}
          alt="GPartner"
        />
      </div>
    </div>
  );
};

export default Villain;
