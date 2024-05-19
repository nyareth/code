import Image from "next/image";
import React from "react";

const Service = ({
  title,
  icon,
  body,
}: {
  title: string;
  icon: string;
  body: string;
}) => {
  return (
    <div className="w-[375px] p-4 rounded-md flex flex-col justify-center bg-blue-500 hover:scale-95 hover:bg-blue-600 ease-linear duration-100 space-y-6">
      <Image
        src={icon}
        width={200}
        height={200}
        alt={`${icon}`}
        className="h-[100px] w-[auto] mx-auto"
      />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p> {body} </p>
    </div>
  );
};

export default Service;
