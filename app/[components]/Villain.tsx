import Image from "next/image";
import React from "react";

const Villain = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex align-center justify-between px-40 mb-16  p-10 text-black">
        <div className="text-left">
          <h1 className="text-6xl font-bold mars">Ready to Boost Growth?</h1>
          <p>Contact us for personal consultation.</p>
        </div>
        <button className="p-4 h-fit w-[200px] bg-black text-white rounded-full">
          Contact Us
        </button>
      </div>
      <div className="flex justify-around items-center">
        <Image src="/meta.png" width={150} height={100} alt="GPartner" />
        <Image src="/GPartner.png" width={200} height={100} alt="GPartner" />
        <Image src="/Youtube.png" width={200} height={100} alt="GPartner" />
        <Image src="/tmp.png" width={200} height={100} alt="GPartner" />
      </div>
    </div>
  );
};

export default Villain;
