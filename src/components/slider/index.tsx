"use client";

import { motion } from "framer-motion";
import SliderArrow from "@icon/sliderArrow";
import Image from "next/image";
import { useState } from "react";

type SliderProps = {
  imagesSrc: string[];
};

function Slider({ imagesSrc }: SliderProps) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full lg:h-[600px] md2:h-[400px] md:h-[430px] sm:h-[340px] xs:h-[320px] h-[290px] flex justify-start items-center overflow-x-scroll bg-black">
      {imagesSrc.map((imageSrc, idx) => (
        <motion.div
          style={{ flex: "0 0 100%" }}
          animate={{
            translateX: `${0 - 100 * selected + (idx - selected) * 100}%`,
          }}
          transition={{
            duration: 0.6,
          }}
          key={idx}
          className="w-full h-full relative rounded-sm bg-black"
        >
          <Image
            className="object-contain rounded-sm w-full h-full aspect-video z-20"
            src={imageSrc}
            alt={"project image"}
            fill
          />
          <div
            onClick={() => {
              setSelected((prev) => {
                if (prev === imagesSrc.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              });
            }}
            className="absolute z-30 top-[50%] right-[10px] bg-neutral-100 rounded-full p-3 flex justify-center items-center"
          >
            <SliderArrow width={20} height={20} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Slider;
