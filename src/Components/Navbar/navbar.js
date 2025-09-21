"use client";
import React, { useEffect, useState } from "react";
import List from "../Lists/Lists";
import MenuData from "./Menudata";
import Logo from "../Svg/Logo";
import Listitem from "../Lists/Listitem";
import Cart from "../Svg/Cart";
import Flex from "../Flex/flex";
import Contact from "../Svg/Contact";
import Search from "../Svg/Search";
import Container from "../Container/container";
import { LuChartBarDecreasing } from "react-icons/lu";

const Navbar = () => {
  let [show, setShow] = useState(true);
  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();

    window.removeEventListener("resize", scrollWidth);
  }, []);
  return (
    <Container>
      <div className=" bg-white md:mt-10 lg:mt-8 2xl:mt-8  mb-[-45px] items-center justify-center sm:w-min md:w-min lg:w-min 2xl:w-full  py-2 2xl:ml-[8px] relative  flex ">
        <Logo />
        <List className="block sm:hidden md:hidden lg:flex 2xl:flex lg:ml-10 2xl:ml-20 cursor-pointer lg:items-center 2xl:items-center 2xl:justify-center lg:gap-6 2xl:gap-6 sm:top-28   sm:bg-white md:bg-white 2xl:bg-none  ">
          {MenuData.map((item, i) => (
            <Listitem
              key={i}
              className="flex items-center justify-center hover:text-Green gap-2 font-sarif font-medium text-xl sm:text-sm   md:text-sm lg:text-sm 2xl:text-xl"
            >
              {item.title}
              {item.icon}
            </Listitem>
          ))}
        </List>

        <Flex className="gap-x-6 ">
          <div className="sm:ml-10 md:ml-10 lg:ml-10 2xl:ml-20 text-svg cursor-pointer relative">
            <Cart />
            <div className="bg-Green w-5 h-5  text-white flex items-center justify-center rounded-full top-[-7px] right-[-7px] text-xs absolute ">
              1
            </div>
          </div>
          <div className="cursor-pointer">
            <Contact />
          </div>
          <div className="cursor-pointer">
            <Search />
          </div>
        </Flex>
        <Flex className="  2xl:ml-8 2xl:gap-x-10 sm:-right-28 md:-right-52  ">
          <div className="sm:ml-10  md:ml-10 lg:ml-6 2xl:ml-10 sm:flex md:flex lg:flex-col 2xl:flex-row gap-x-6 ">
            <button className="hover:bg-gradient-to-r transition-all duration-150 ease-in-out  from-Blue cursor-pointer  hover:text-white to-indigo ... py-3 font-serif font-medium sm:px-4 md:px-6 lg:px-6 2xl:px-6 text-button rounded-lg sm:text-sm md:text-sm lg:text-base 2xl:text-xl">
              Login
            </button>
            <button className="hover:bg-gradient-to-r transition-all duration-150 ease-in-out  from-Blue hover:text-white cursor-pointer to-indigo ... py-3  sm:text-sm md:text-sm lg:text-base 2xl:text-xl  font-serif rounded-lg font-medium sm:px-4 md:px-6 lg:px-6 2xl:px-6 text-button ">
              Signup
            </button>
          </div>
          <div className=" relative -mt-6 sm:ml-28 md:ml-36 ">
            {show && (
              <List className="block lg:hidden 2xl:hidden  cursor-pointer -mt-8 right-10 sm:top-28 absolute bg-slate-200  p-6  shadow-inner shadow-heading rounded-lg">
                {MenuData.map((item, i) => (
                  <Listitem
                    key={i}
                    className="flex items-center justify-center hover:text-Green gap-6 font-sarif font-medium text-xl sm:text-sm md:text-base "
                  >
                    {item.title}

                    {item.icon}
                  </Listitem>
                ))}
              </List>
            )}
            <LuChartBarDecreasing
              onClick={() => setShow(!show)}
              className=" block lg:hidden 2xl:hidden ml-28 mt-10 sm:right-10 absolute cursor-pointer"
            />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Navbar;
