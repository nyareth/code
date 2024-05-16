import React from "react";
import Method from "./Method";

const Methodology = () => {
  return (
    <div>
      <>
        <h1 className="text-6xl mb-2 mars">Our Methodology</h1>
        <p>
          We have proven systems to make sure you have a seamless experience
        </p>
      </>
      <div className="flex mt-16 max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <Method
          no="1"
          title="Analysis"
          body="We carry out an in-depth audit: brand, products, competition, advertising accounts, customer reviews, CRO, tracking, etc"
        />
        <Method
          no="2"
          title="Design"
          body="We offer you media strategy, creatives and optimizations of your sales tunnel"
        />
        <Method
          no="3"
          title="Test And Learn"
          body="We test dozens of combinations until we find a mechanism that works on a small scale"
        />
        <Method
          no="4"
          title="Scale"
          body="We gradually increase your budgets while maintaining your CPA & ROIs"
        />
      </div>
    </div>
  );
};

export default Methodology;
