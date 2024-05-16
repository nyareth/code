import React from "react";

const Method = ({
  no,
  title,
  body,
}: {
  no: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="w-[280px] text-center p-4">
      <p className="border-2 border-blue-500 mx-auto px-10 py-2 w-fit rounded-full">
        Step {no}
      </p>
      <h1 className="text-3xl my-4 max-sm:text-xl font-semibold"> {title} </h1>
      <p className="max-sm:text-sm"> {body} </p>
    </div>
  );
};

export default Method;
