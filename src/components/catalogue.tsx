import React from "react";
import SectionHeading from "./section-heading";
import Card1 from "./buttons/card1";
import Card2 from "./buttons/card2";
import Card3 from "./loaders/card3";
import Card4 from "./loaders/card4";
import Card5 from "./loaders/card5";
import Card6 from "./loaders/card6";
import Card7 from "./cards/card7";
import Card8 from "./inputs/card8";
import Card9 from "./inputs/card9";

const Catalogue = () => {
  return (
    <>
      <SectionHeading> Buttons </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="buttons"
      >
        <Card1 />
        <Card2 />
      </div>
      <SectionHeading> Cards </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="cards"
      >
        <Card7 />
      </div>
      <SectionHeading> Loaders </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="loaders"
      >
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
      <SectionHeading> Forms </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="forms"
      >
        <Card1 />
        <Card2 />
      </div>
      <SectionHeading> Tooltips </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="tooltips"
      ></div>
      <SectionHeading> Inputs </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="inputs"
      >
        <Card8 />
        <Card9 />
      </div>
      <SectionHeading> Toggle switches </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="switches"
      ></div>
      <SectionHeading> Check boxes </SectionHeading>
      <div
        className="w-full h-full grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-4 p-5 items-center text-center overflow-auto"
        id="checkboxes"
      ></div>
    </>
  );
};

export default Catalogue;
