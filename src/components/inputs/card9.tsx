import React from "react";

const Card9 = () => {
  return (
    <div className="flex h-[200px] w-full flex-col gap-[2] p-[2rem] rounded-[1rem] justify-center  items-center bg-white-100 text-black-100">
      <form className="hidden md:flex items-center justify-center">
        <div className="relative flex">
          {/*Text Input*/}
          <div className="w-full flex flex-col mt-2">
            <div>
              <input
                type="text"
                name="searchbar"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-full border border-[#66666690] outline-none text-sm px-4 py-3 placeholder:text-[#666] "
              />
              <button className="absolute right-4 top-3 bottom-1 text-[#66666690] rounded-lg p-2 text-s hover:bg-[#f4efef90]">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card9;
