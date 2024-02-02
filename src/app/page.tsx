"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Catalogue from "@/components/catalogue";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-start pt-24 mx-auto">
      {/*menu bar only appear for large screens > md*/}
      <div className="hidden w-1/8 lg:w-1/8 h-full md:flex flex-0 flex-col overflow-y-auto px-6">
        {links.map((link, index) => (
          <Link
            href={link.hash}
            className=" flex w-full items-start justify-start transition relative "
            key={index}
          >
            <li
              className={` list-none cursor-pointer font-bold text-center py-3 my-2 text-lg hover:bg-white-50 hover:text-black-100 hover:rounded-full px-3`}
              key={index}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </div>
      <div className="flex-1 h-full w-full flex flex-col gap-3 overflow-y-auto rounded-xl justify-start items-start">
        <Catalogue />
      </div>
    </main>
  );
}
