import React from "react";
import Image from "next/image";
import typography from "../../assets/typography.png";
import trainning from "../../assets/trainning.png";
import system from "../../assets/system.png";
import puzzle from "../../assets/puzzle.png";
import growth from "../../assets/growth.png";
import earnning from "../../assets/earnning.png";
import Container from "../Container/container";
import Flex from "../Flex/flex";
import { IoCartOutline } from "react-icons/io5";

const Course = () => {
  return (
    <>
      <div className=" p-20 bg-gradient-to-t  from-blue-100  to-white  w-full">
        <div className="mt-[-160px] ml-[40%] ">
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl  text-black font-serif font-medium pb-10">
            Featured <span className="text-Green">Course</span>
          </h1>
          <p className=" font-normal font-serif sm:ml-[-20px] sm:pr-[2%] md:ml-[-20px] md:pr-[30px] sm:text-sm md:text-base lg:text-lg 2xl:text-xl 2xl:ml-[-90px] 2xl:pr-[54%] text-para pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
        </div>

        <Container>
          <div className="grid grid-cols-3  items-center justify-center sm:gap-x-10 sm:gap-y-10 md:gap-x-6 md:gap-y-6 lg:ml-[120px] lg:mr-[50px] 2xl:gap-x-14 2xl:gap-y-14 ">
            <div>
              <Image src={typography} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-4 rounded-b-xl">
                <Flex className="justify-between px-4 py-4 ">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className="2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline />
                </Flex>
              </div>
            </div>
            <div>
              <Image src={trainning} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-4 rounded-b-xl">
                <Flex className="justify-between px-4 py-4">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className="2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline className="h-7 w-7" />
                </Flex>
              </div>
            </div>
            <div>
              <Image src={system} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-4 rounded-b-xl">
                <Flex className="justify-between px-4 py-4">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className=" 2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline className="h-7 w-7" />
                </Flex>
              </div>
            </div>
            <div>
              <Image src={puzzle} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-4 rounded-b-xl">
                <Flex className="justify-between px-4 py-4">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className="2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline className="h-7 w-7" />
                </Flex>
              </div>
            </div>
            <div>
              <Image src={growth} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-4 rounded-b-xl">
                <Flex className="justify-between px-4 py-4">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className="2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline className="h-7 w-7" />
                </Flex>
              </div>
            </div>
            <div>
              <Image src={earnning} alt="img" width={400} height={600} />
              <div className="bg-white 2xl:w-[400px] 2xl:p-2 rounded-b-xl">
                <Flex className="justify-between px-4 py-4">
                  <h1 className="text-sm font-serif font-medium text-para">
                    5,957 Students
                  </h1>
                  <h2 className="text-sm font-serif font-medium text-para">
                    01h 49m
                  </h2>
                </Flex>
                <p className="2xl:text-xl font-serif 2xl:font-semibold text-heading px-4 py-2">
                  Education Software and PHP and JS System Script
                </p>
                <Flex className="justify-between py-4 px-4">
                  <h1 className="text-xl font-serif font-semibold text-para">
                    $33.99
                  </h1>
                  <IoCartOutline className="h-7 w-7" />
                </Flex>
              </div>
            </div>
            <div className=" pb-20 ">
              <button class=" bg-white mt-16 sm:ml-[260px] 2xl:ml-[530px]  border-indigo mr-[-395px] hover:bg-gradient-to-r   from-purple-400  to-blue-400 ...  text-xl font-serif font-medium  transition-all duration-300 ease-in-out rounded-lg cursor-pointerm-4 p-1  via-fuchsia-400 to-indigo-500 bg-gradient-to-r">
                <span class="block text-black sm:px-4 sm:py-2 2xl:px-8 2xl:py-4 bg-white   border-indigo border   hover:bg-gradient-to-r   from-Blue  to-indigo ...  text-xl font-serif font-medium  transition-all duration-150 ease-in-out rounded-lg cursor-pointer hover:text-white">
                  Explore courses
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Course;
