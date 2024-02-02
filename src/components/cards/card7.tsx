import Image from "next/image";
import React from "react";
import moment from "moment";
import { BiSolidLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Card7 = () => {
  const likeIconStyle = {
    fontSize: "20px",
    color: "#065AD8", // Apply blue color directly as a style
  };

  return (
    <div className="flex w-full flex-col rounded-[1rem] p-5 bg-white-100 text-black-100">
      {/* Display post owner detail */}
      <div className="flex flex-col">
        <div className="w-full flex justify-between">
          <div className="flex gap-1">
            <Image
              src="/userprofile.png"
              alt="user"
              width={14}
              height={14}
              className="object-cover rounded-full"
            />

            <p className="font-medium text-xs text-grey-100">Username</p>
          </div>
          <span className="text-xs text-grey-100">
            {moment("2023-05-25").fromNow()}
          </span>
        </div>
        {/* Display post message detail */}
        <div className="flex mt-2">
          <p className="text-xs text-grey-100 mb-2">Your messages ...</p>
        </div>
        <Image
          src="https://res.cloudinary.com/dfx7jn7xg/image/upload/v1701934970/socialmedia/auxq7kk3xecnccqtx0ig.jpg"
          alt="pic"
          width={400}
          height={50}
          className=" rounded-lg"
        />
        {/* Display like and comment count */}
        <div className="mt-3 flex justify-between items-center pt-1 text-xs border-t border-[#66666645]">
          <BiSolidLike style={likeIconStyle} />
          <BiComment size={20} style={likeIconStyle} />
          <MdOutlineDeleteOutline size={20} style={likeIconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Card7;
