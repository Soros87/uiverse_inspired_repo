import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const Card1 = () => {
  const pending = false;
  return (
    <div className="flex h-[200px] w-full flex-col gap-[2] p-[2rem] rounded-[1rem] justify-center  items-center bg-white-100 text-black-100">
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
    </div>
  );
};

export default Card1;