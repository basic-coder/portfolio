import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { GridBackground } from './ui/GridBackground';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[50vh] w-[50vw]" fill="blue" />
      </div>

      <GridBackground
        subTitle="Hi, I'm Bhavesh — a Frontend Developer"
        description="Crafting scalable, performant web experiences with React and Next.js"
        title="Building Dynamic Interfaces with the Power of Next.js"
        buttonTitle="View My Work"
        buttonIcon={<FaLocationArrow />}
        buttonPosition="right"
        otherClasses="gap-2"
      />
    </div>
  );
};

export default Hero;
