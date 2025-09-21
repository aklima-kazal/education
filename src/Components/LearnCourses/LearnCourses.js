"use client";
import React from "react";
import Image from "next/image";
import Group_round from "@/assets/Group_round.png";
import Learn from "../Svg/Learn";
import Graduate from "../Svg/Graduate";
import Work from "../Svg/Work";
import Flex from "../Flex/flex";

const LearnCourses = () => {
  return (
    <div className="">
      <div className="p-16 bg-gradient-to-r  from-Purple_Purse via-Purple  to-indigo w-full  mt-[-55px]">
        <Flex>
          <Image
            src={Group_round}
            alt="img"
            width={150}
            height={150}
            className="ml-[-80px]"
          />
          <div className="  2xl:mx-[30%] ">
            <h1 className="pb-4 text-white text-3xl text-center font-serif font-bold">
              Why <span className="text-Green"> learn</span> with our courses?
            </h1>
            <p className="text-lg text-center text-white font-normal font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </p>
          </div>
        </Flex>

        <div className="grid grid-cols-3 justify-around items-center">
          <div className="border-dashed border-r-2">
            <div className="sm:ml-12 md:ml-16 lg:ml-24 2xl:ml-52 mb-8">
              <Learn />
            </div>
            <h1 className="text-center mb-6 sm:text-lg md:text-xl 2xl:text-3xl text-white font-serif font-bold">
              01. Learn
            </h1>
            <p className="text-center sm:text-sm md:text-base lg:mx-8 2xl:text-lg  2xl:mx-24 text-white font-normal font-serif ">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
          <div className="border-dashed border-r-2 border-linear-45 from-blue via-purple to-pink-500 ">
            <div className="sm:ml-12 md:ml-16 lg:ml-24 2xl:ml-52 mb-8">
              <Graduate />
            </div>
            <h1 className="text-center mb-6 sm:text-lg md:text-xl 2xl:text-3xl text-white font-serif font-bold">
              02. Graduate
            </h1>
            <p className="text-center sm:text-sm md:text-base 2xl:text-lg lg:mx-8 2xl:mx-24 text-white font-normal font-serif ">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
          <div>
            <div className="sm:ml-12 md:ml-16 lg:ml-24 2xl:ml-52 mb-8">
              <Work />
            </div>
            <h1 className="text-center mb-6 sm:text-lg md:text-xl 2xl:text-3xl text-white font-serif font-bold">
              03. Work
            </h1>
            <p className="text-center sm:text-sm md:text-base 2xl:text-lg lg:mx-8  2xl:mx-24 text-white font-normal font-serif ">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCourses;
