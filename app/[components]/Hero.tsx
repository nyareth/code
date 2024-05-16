import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center h-[600px] max-md:min-h-screen">
        <div className="w-1/2 max-sm:w-full max-sm:text-center  text-left space-y-10">
          <h1 className="text-6xl mars">
            The Best of Digital <br /> Brands And Communities
          </h1>
          <p className="text-lg text-slate-200">Maximize Your Online Impact</p>
          <button className="action bg-blue-500">Contact Us</button>
        </div>
        <div className="w-1/2 max-sm:hidden h-full">
          <Image
            width={600}
            height={720}
            alt="Hero Thumbnails"
            src="/thumb.png"
            className=""
          />
        </div>
      </div>
      {/* Partners  */}
      <div className="flex items-center max-sm:overflow-x-visible justify-around w-full max-sm:-mt-40">
        <Image
          src="/air.png"
          height={100}
          width={200}
          className="h-[70px] max-sm:h-[40px]  w-auto"
          alt="Airtel logo"
        />
        <Image
          src="/cc.png"
          height={100}
          width={200}
          className="h-[70px] max-sm:h-[40px]  w-auto"
          alt="MasterCard logo"
        />
        <Image
          src="/mtn.png"
          height={100}
          width={200}
          className="h-[70px] max-sm:h-[40px]  w-auto"
          alt="MTN logo"
        />
        <Image
          src="/pay.png"
          height={120}
          width={200}
          className="h-[100px] max-sm:h-[60px] w-auto"
          alt="PayPal logo"
        />
        <Image
          src="/stanbic.png"
          height={100}
          width={200}
          className="h-[100px] max-sm:h-[40px]  w-auto"
          alt="Stanbic Bank logo"
        />
      </div>
    </div>
  );
};

export default Hero;
