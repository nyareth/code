import React from "react";

const Question = ({ qn, ans }: { qn: string; ans: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold max-sm:text-lg">{qn}</h1>
      <p className="mb-4 text-slate-400 max-sm:text-sm">{ans}</p>
    </div>
  );
};

export default Question;
