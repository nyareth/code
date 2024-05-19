import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="w-full flex-col  space-y-24 max-sm:space-y-8 flex justify-center">
      {/* Numbers / Credentials */}
      <div>
        <div className="sxn mb-16 max-sm:mb-4">
          <h1 className="text-6xl mb-2 mars">Boost Sales with Advertising</h1>
          <p>Trust our agency by numbers</p>
        </div>
        <div className="flex w-full justify-center items-center space-x-10 divide-slate-500 divide-x-2">
          <div className="flex flex-col px-5  max-sm:px-2">
            <div className="number_title">50% CPA</div>
            <p className="text-sm max-sm:text-xs">On Average</p>
          </div>
          <div className="flex flex-col px-5  max-sm:p-0">
            <div className="number_title">$10,000+</div>
            <p className="text-sm max-sm:text-xs">Advertising Investment</p>
          </div>
          <div className="flex flex-col px-5">
            <div className="number_title">40+ </div>
            <p className="text-sm max-sm:text-xs">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services">
        <div className="mb-16">
          <h1 className="text-6xl mb-2 mars">Our Services</h1>
          <p>
            Unlock innovative solutions for your brand's digital journey with
            our dynamic suite of offerings
          </p>
        </div>
        <div className="flex justify-center max-sm:flex-wrap max-sm:space-y-5 max-sm:space-x-0 space-x-5 align-center">
          <Service
            icon="/media.png"
            title="Media Management"
            body="We manage your Meta, Titok, Snap, Instagram & Pinterest Campaigns
              with two inseperable objectives: Volume and Profitability"
          />
          <Service
            icon="/studio.png"
            title="Creative Studio"
            body="From creative strategy to copywriting web design, editing and
              publishing, we create ads that convert"
          />
          <Service
            icon="/web.png"
            title="Web Services"
            body="From design and integration to copywriting and (re)defining your
              offer, we build landing pages specifically designed to sell"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
