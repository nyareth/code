import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="max-w-6xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">About us</h1>
        <br />
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ... ml-2">
          <Image
            src="/logo.png"
            alt="image description"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 ...">
          <p>
            We offer a range of social media marketing services to help small
            businesses establish a strong online presence. From social media
            account management to paid advertising and account growth, we have
            the expertise to help you succeed. <br /> At The Mia Media, we
            started with a passion for helping small businesses succeed online.
            We've grown into a full-service social media marketing agency with a
            talented team and a commitment to delivering results.
          </p>
          <br />
        </div>
        <div className="row-span-2 col-span-2 ...">
          <p>
            We take a data-driven approach to social media marketing, using
            analytics and insights to inform our strategies. We also prioritize
            transparency and communication, keeping our clients informed every
            step of the way.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
