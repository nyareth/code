import React from "react";
import Test from "./Test";

const Testimonials = () => {
  return (
    <div className="flex justify-center w-4/5 flex-col" id="testimonials">
      <h1 className="text-6xl mb-2 mars ">What our clients have to say</h1>
      <div className=" md:mb-20 flex items-center justify-between">
        <p>
          Clients testimonials praising our service, reliability and dedication
          to exceeding expectations speak volumes about our commitment
        </p>
        <button className="bg-blue-500 max-sm:hidden rounded-full p-2 w-[150px]">
          Contact Us
        </button>
      </div>

      <div className="flex max-sm:space-x-0 max-sm:justify-center max-sm:w-full max-sm:flex-wrap max-sm:space-y-2 max-sm:p-4 space-x-2">
        <Test
          name="Lea Bess"
          pfp="/Lea.jpg"
          rating={5}
          comment="Right from the start of our collaboration, our Facebook/Instagram ad campaign statistics went through the roof"
        />
        <Test
          name="Frank Lunio"
          pfp="/Frank.jpg"
          rating={5}
          comment="Despite the high-end positioning of our product, we recorded 30% additional sales."
        />
        <Test
          name="Ladu Pierre"
          pfp="/Mains.jpg"
          rating={5}
          comment="With M.I.A, we were able to rapidly observe significant growth in our sales within the first month of our collaboration"
        />
        <Test
          name="Maria Fermio"
          pfp="/Maria.jpg"
          rating={5}
          comment="M.I.A helped us rethink our campaigns and audiences, and rework our conversion tunnel in a more optimal way"
        />
      </div>
    </div>
  );
};

export default Testimonials;
