import React from "react";

const Question = ({ qn, ans }: { qn: string; ans: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{qn}</h1>
      <p className="mb-4 text-slate-400">{ans}</p>
    </div>
  );
};

export default Question;
