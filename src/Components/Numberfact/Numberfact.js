import Image from "next/image";
import React from "react";
import Groupimg from "@/assets/groupimg.png";
import Flex from "../Flex/flex";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Testimonialgroup from "@/assets/testimonialgroup.png";
import Traiangal from "../Svg/Traiangal";
import Halfcircle from "../Svg/Halfcircle";

const Numberfact = () => {
  return (
    <div>
      <div className="bg-gradient-to-t  from-blue-100  to-white  w-full  sm:pt-10 lg:p-16  2xl:p-28 pb-20">
        <Flex className="items-center sm:flex-col lg:flex-row 2xl:flex-row  justify-around lg:gap-x-16 2xl:gap-x-20">
          <Image
            src={Groupimg}
            height={500}
            width={600}
            alt="img"
            className="sm:w-1/2 sm:h-1/2 lg:w-[450px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[690px]  "
          />
          <div className="sm:w-[70%] md:w-[70%]  2xl:w-[45%] items-center justify-around">
            <h2 className="sm:text-xl md:text-2xl Lg:text-2xl 2xl:text-4xl text-black font-serif font-bold sm:pb-4 md:pb-6 lg:pb-6 2xl:pb-10">
              The number one factor in <br />
              <span className="text-Green">
                relevance drives out resistance.
              </span>
            </h2>
            <p className="sm:text-sm md:text-base Lg:text-lg 2xl:text-xl font-normal font-serif  text-para ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button class=" bg-white sm:mt-8 2xl:mt-16   border-indigo  hover:bg-gradient-to-r   from-purple-400  to-blue-400 ...  text-xl font-serif font-medium  transition-all duration-300 ease-in-out rounded-lg cursor-pointerm-4 p-1  via-fuchsia-400 to-indigo-500 bg-gradient-to-r">
              <span class="block text-black sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-6 lg:py-2 2xl:px-8 2xl:py-4 bg-white   border-indigo border   hover:bg-gradient-to-r   from-Blue  to-indigo ... sm:text-sm md:text-base Lg:text-lg 2xl:text-xl font-serif font-medium  transition-all duration-150 ease-in-out rounded-lg cursor-pointer hover:text-white">
                Learn More
              </span>
            </button>
            <div className="sm:ml-0 md:ml-[500px] lg:ml-80 2xl:ml-[560px]">
              <Traiangal />
            </div>
          </div>
        </Flex>
        <div className="mx-24 my-20">
          <Image
            src={Testimonialgroup}
            alt="img"
            height={800}
            width={1600}
            className="ml-5"
          />
        </div>
        <div className="ml-10">
          <Halfcircle />
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Numberfact;
