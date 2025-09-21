"use client";
import React from "react";
import Flex from "../Flex/flex";
import Lists from "../Lists/Lists";
import Listitem from "../Lists/Listitem";
import Logo_white from "../Svg/Logo_white";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import Facebook from "../Svg/Facebook";
import Twitter from "../Svg/Twitter";
import Insta from "../Svg/Insta";
import Be from "../Svg/Be";
import Circle from "../Svg/Circle";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-l sm:p-8 md:p-10 lg:p-12 2xl:p-16 from-footer_end  to-footer_start  w-full">
        <Logo_white className="" />
        <Flex className="border-b border-slate-300 pb-12">
          <p className=" mt-10   text-white sm:text-xs md:text-sm lg:text-sm 2xl:text-base font-serif">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <Lists className="sm:px-4 md:px-4 lg:px-14 2xl:px-20">
            <h1 className="text-white sm:text-base md:text-base lg:text-xl 2xl:text-2xl font-serif font-medium mt-[-31px] sm:mb-[38px] md:mb-[44px] lg:mb-[44px] 2xl:mb-[44px]">
              Quick Links
            </h1>
            <Flex className="sm:gap-x-2 md:gap-x-4 lg:gap-x-6 2xl:gap-x-10  text-white text-base font-serif">
              <Lists>
                <Listitem className="mb-5 sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                  About
                </Listitem>
                <Listitem className="sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                  Course
                </Listitem>
              </Lists>
              <Lists>
                <Listitem className="mb-5 sm:text-xs md:text-xs  lg:text-sm 2xl:text-lg">
                  Blog
                </Listitem>
                <Listitem className="sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                  Contact
                </Listitem>
              </Lists>
            </Flex>
          </Lists>
          <Lists className="sm:px-2 md:px-4 lg:px-8 2xl:px-10">
            <h1 className="text-white sm:text-base md:text-base lg:text-xl 2xl:text-2xl font-serif font-medium mt-[-31px] mb-[44px]">
              Contact us
            </h1>
            <Flex className=" sm:gap-x-2 md:gap-x-4 lg:gap-x-4 2xl:gap-x-8  text-white text-base font-serif">
              <Lists>
                <Listitem className="sm:mb-4 md:mb-8 lg:mb-8 2xl:mb-8">
                  <FiPhone />
                </Listitem>
                <Listitem>
                  <IoMailOutline />
                </Listitem>
              </Lists>
              <Lists>
                <Listitem className="sm:mb-4  md:mb-8 lg:mb-6 2xl:mb-4 sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                  (209) 555-0104
                </Listitem>
                <Listitem className="sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                  michelle.rivera@example.com
                </Listitem>
              </Lists>
              <Flex className="md:-ml-6 lg:-ml-10 2xl:gap-x-6 2xl:ml-5 ">
                <Lists>
                  <Listitem>
                    <LuMapPin />
                  </Listitem>
                </Lists>
                <Lists>
                  <Listitem className="sm:text-xs md:text-xs lg:text-sm 2xl:text-lg">
                    2715 Ash Dr. San Jose, South Dakota 83475
                  </Listitem>
                </Lists>
              </Flex>
            </Flex>
          </Lists>
        </Flex>
        <div className="mt-10 text-base text-white font-serif font-medium flex">
          <h2>Copyright 2023 | All Rights Reserved</h2>
          <div className="ml-auto flex gap-x-6 ">
            <Facebook className="" />

            <Twitter />

            <Insta />

            <Be />

            <Circle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
