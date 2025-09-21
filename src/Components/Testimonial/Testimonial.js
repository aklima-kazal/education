import React from "react";
import Container from "../Container/container";
import Flex from "../Flex/flex";
import Blueman from "../Svg/Blueman";
import Yellowman from "../Svg/Yellowman";
import Coffeeman from "../Svg/Coffeeman";
import Lists from "../Lists/Lists";
import Listitem from "../Lists/Listitem";
import Goldenstar from "../Svg/Goldenstar";
import Graystar from "../Svg/Graystar";

const Testimonial = () => {
  return (
    <div>
      <Container className="">
        <div className="my-20 -mt-20">
          <h4 className="text-3xl text-Green font-serif font-bold text-center ">
            Testimonials
          </h4>
          <p className="text-center text-para text-lg font-serif font-normal pt-6">
            What our student say about us
          </p>
        </div>
        <Flex className="justify-between items-center sm:flex-col  md:flex-col lg:flex-col 2xl:flex-row  gap-y-14">
          <div className="md:h-[360px] md:w-[600px] lg:h-[360px] lg:w-[800px] 2xl:h-[370px] 2xl:w-[470px] bg-white  rounded-2xl p-4">
            <div className="mx-10 my-8">
              <Blueman />
              <h1 className="-ml-2 -my-10 text-lg text-black font-serif font-semibold text-center ">
                Ronald Richards
              </h1>
            </div>
            <p className="text-center text-para text-lg font-serif font-normal pt-10 items-center 2xl:mx-8  justify-center">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Lists className="flex mx-8 gap-x-2 pt-10 pb-10">
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Graystar />
              </Listitem>
            </Lists>
          </div>
          <div className="md:h-[360px] md:w-[600px] lg:h-[360px] lg:w-[800px] 2xl:h-[370px] 2xl:w-[470px] bg-white rounded-2xl p-4">
            <div className="mx-10 my-8">
              <Yellowman />
              <h1 className="-ml-2 -my-10 text-lg text-black font-serif font-semibold text-center ">
                Wade Warren
              </h1>
            </div>
            <p className="text-center text-para text-lg font-serif font-normal pt-10 items-center mx-8  justify-center">
              Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Reprehenderit in voluptate velit esse
            </p>
            <Lists className="flex mx-8 gap-x-2 pt-10 pb-10">
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Graystar />
              </Listitem>
            </Lists>
          </div>
          <div className="md:h-[360px] md:w-[600px] lg:h-[360px] lg:w-[800px] 2xl:h-[370px] 2xl:w-[470px] bg-white rounded-2xl p-4">
            <div className="mx-10 my-8">
              <Coffeeman />
              <h1 className="-ml-2 -my-10 text-lg text-black font-serif font-semibold text-center ">
                Jacob Jones
              </h1>
            </div>
            <p className="text-center text-para text-lg font-serif font-normal pt-10  mx-8 ">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>

            <Lists className="flex mx-8 gap-x-2 pt-10 pb-10">
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Goldenstar />
              </Listitem>
              <Listitem>
                <Graystar />
              </Listitem>
            </Lists>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Testimonial;
