import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <div className="">
      <div className="mb-16 max-sm:mb-10">
        <h1 className="text-6xl mb-2">FAQ</h1>
        <p>Answers to common questions about our agency services</p>
      </div>
      <div className="text-left space-y-4 p-4">
        <Question
          qn="What is UGC"
          ans="UGC or User Generated Content is a form of content created by individuals rather than brands and shared on social networks or other online platforms"
        />
        <Question
          qn="How can the agency help you?"
          ans="the workings of an Ads agency are based on a thorough understanding of the company's objectives rigorous audience and competitor analysis , and ongoing management and optimization of advertising campaigns."
        />
        <Question
          qn="How are your prices determined?"
          ans="The price of our service depends on the ROI expected by the cleint thus making sure our partnership is benefitial to both parties"
        />
      </div>
    </div>
  );
};

export default FAQ;
