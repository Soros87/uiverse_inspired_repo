import Image from "next/image";
import React from "react";

const Card5 = () => {
  return (
    <div className="flex h-[200px] w-full flex-col gap-[2] p-[2rem] rounded-[1rem] justify-center  items-center bg-black-75 text-black-100">
      <div className="flex text-center m-1">
        <Image src={"/loader.gif"} alt="loader" width={100} height={100} />
      </div>
    </div>
  );
};

export default Card5;
