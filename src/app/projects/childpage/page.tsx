import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-lime-800 w-full min-h-[300px]">
      <div className="relative w-full h-full">
        <Image
          className="absolute"
          src="/img/66714449.jpeg"
          width={300}
          height={300}
          alt="toby pic"
        />
      </div>
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="text-3xl text-white">page hasjhd</div>
      </div>
    </div>
  );
};

export default page;
