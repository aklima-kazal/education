"use client";
import Image from "next/image";
import React from "react";
import Group from "@/assets/group.png";
import Group_Bottom from "@/assets/group_bottom.png";
import Container from "../Container/container";
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
      </div>
    </>
  );
};

export default Banner;
