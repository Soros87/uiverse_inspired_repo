import Image from "next/image";
import React from "react";
import Style from "./loader.module.css";

const Card6 = () => {
  return (
    <div className="flex h-[200px] w-full flex-col gap-[2] p-[2rem] rounded-[1rem] justify-center  items-center bg-black-75 text-black-100">
      <div className={Style.loader}>
        <div className={Style.circle}>
          <div className={Style.dot}></div>
          <div className={Style.outline}></div>
        </div>
        <div className={Style.circle}>
          <div className={Style.dot}></div>
          <div className={Style.outline}></div>
        </div>
        <div className={Style.circle}>
          <div className={Style.dot}></div>
          <div className={Style.outline}></div>
        </div>
        <div className={Style.circle}>
          <div className={Style.dot}></div>
          <div className={Style.outline}></div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
