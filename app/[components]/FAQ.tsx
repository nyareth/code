import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <div className="sxn">
      <div className="mb-16">
        <h1 className="text-6xl mb-2">FAQ</h1>
        <p>Answers to common questions about our agency services</p>
      </div>
      <div className="text-left space-y-4">
        <Question
          qn="What is UGC"
          ans="UGC or User Generated Content is a form of content created by individuals rather than brands and shared on social networks or other online platforms"
        />
        <Question
          qn="How can the agency help you?"
          ans="the workings of an Ads agency are based on a thorough understanding of the company's objectives rigorous audience and competitor analysis , and ongoing management and optimization of advertising campaigns."
        />
        <Question
          qn="How are content creators selected?"
          ans="We select our content creators based on their affinity with your brand, their creativity and their ability to engage their audience while ensuring that they match your company's values and aesthetic"
        />
      </div>
    </div>
  );
};

export default FAQ;
