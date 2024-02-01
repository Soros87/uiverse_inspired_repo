"use client";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/lib/data";

const Card8 = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex h-[200px] w-full flex-col gap-[2] p-[2rem] rounded-[1rem] justify-center  items-center bg-white-100 text-black-100">
      <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
          <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
              <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px] ">
                  <Image
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo"
                  />
                </Combobox.Button>
                <Combobox.Input
                  className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                  placeholder="Volkswagen"
                  displayValue={(manufacturer: string) => manufacturer}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options>
                    {filteredManufacturers.map((item) => (
                      <Combobox.Option
                        key={item}
                        className={({ active }) =>
                          `relative search-manufacturer__option ${
                            active ? `bg-blue-800 text-white` : `text-gray-900`
                          }`
                        }
                        value={item}
                      >
                        {item}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Transition>
              </div>
            </div>
          </Combobox>
        </div>
      </form>
    </div>
  );
};

export default Card8;
