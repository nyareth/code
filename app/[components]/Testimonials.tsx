import Image from "next/image";
import React from "react";
import Test from "./Test";

const Testimonials = () => {
  return (
    <div className="">
      <h1 className="text-6xl mb-2 mars">What our clients have to say</h1>
      <div className="w-full mb-20 flex items-center justify-between">
        <p>
          Clients testimonials praising our service, reliability and dedication
          to exceeding expectations speak volumes about our commitment
        </p>
        <button className="bg-blue-500 rounded-full p-2 w-[150px]">
          Contact Us
        </button>
      </div>

      <div className="flex">
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
