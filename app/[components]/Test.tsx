import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Test = (props: {
  name: string;
  pfp: string;
  comment: string;
  rating: number;
}) => {
  return (
    <div className="p-4 w-[400px] rounded-md bg-white">
      <div className="flex items-center max-sm:justify-around mb-5 space-x-10">
        <Image
          src={props.pfp}
          width={100}
          height={100}
          className="rounded-full w-[75px] h-[75px]"
          alt={`${props.name}'s profile picture`}
        />
        <div className="flex">
          <StarIcon className="text-yellow-500" />
          <StarIcon className="text-yellow-500" />
          <StarIcon className="text-yellow-500" />
          <StarIcon className="text-yellow-500" />
          <StarIcon className="text-yellow-500" />
        </div>
      </div>
      <p className="text-gray-800 max-sm:text-left"> {props.comment} </p>
      <p className="text-slate-400"> {props.name} </p>
    </div>
  );
};

export default Test;
