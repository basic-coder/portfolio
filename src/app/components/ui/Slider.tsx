"use client";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slider = {
  id: string;
  title: string;
  des: string;
  img: string;
  link?: string;
};

export const Slider = ({
  Sliders,
  autoplay = false,
}: {
  Sliders: Slider[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % Sliders.length);
  }, [Sliders.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + Sliders.length) % Sliders.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence >
              {Sliders.map((slider, index) => (
                <motion.div 
                  key={slider.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : Sliders.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom border border-white/[0.2] rounded-2xl "
                >
                  <a href={Sliders[active].link} target="_blank">
                  <Image
                    src={slider.img}
                    alt={slider.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-fill object-center"
                    priority={isActive(index)} // Prioritize active image
                  />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white">
              {Sliders[active].title}
            </h3>

            <motion.p className="mt-5 text-lg text-neutral-300 ">
              {Sliders[active].des.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* <a href={Sliders[active].link} target="_blank" className="text-sm mt-5 font-bold text-black dark:text-white mb-6">
              Project Link
            </a> */}
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800"
              aria-label="Previous Slide"
            >
              <FiArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 bg-neutral-800"
              aria-label="Next Slide"
            >
              <FiArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
