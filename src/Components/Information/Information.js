import React from "react";
import Amazon from "../Svg/Amazon";
import Flex from "../Flex/flex";
import AMD from "../Svg/AMD";
import CISCI from "../Svg/CISCI";
import Dropcom from "../Svg/Dropcom";
import Spotify from "../Svg/Spotify";
import Container from "../Container/container";

const Information = () => {
  return (
    <div>
      <div className="bg-white sm:mt-[-244px] lg:mt-[-270px] 2xl:mt-[-330px]  bg-gradient-to-r from-information via-purple-400 to-blue-400">
        <Container>
          <Flex className=" sm:p-4 sm:gap-x-6 sm:my-44 lg:p-6 2xl:p-10 items-center justify-around">
            <Amazon />
            <AMD />
            <CISCI />
            <Dropcom />
            <Spotify />
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Information;
