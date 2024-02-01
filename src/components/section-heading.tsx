import { SectionHeadingProps } from "@/types";
import React from "react";

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pl-7 text-h3 font-medium capitalize mb-8 text-center text-white-100">
      {children}
    </h2>
  );
}
