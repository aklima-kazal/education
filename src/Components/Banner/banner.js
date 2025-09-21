"use client";
import Image from "next/image";
import React from "react";
import Group from "@/assets/Group.png";
import Information from "../Information/Information";

const Banner = () => {
  return (
    <>
      <div>
        <Image
          src={Group}
          alt="banner"
          width={1800}
          height={1800}
          className=" object-cover border-none mt-4 "
        />
        <Information />
      </div>
    </>
  );
};

export default Banner;
