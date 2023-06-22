"use client";

import { useSelectedOptionHeader } from "@store/headerOption";
import { motion } from "framer-motion";
import { useCallback } from "react";

const TabOption = () => {
  const state = useSelectedOptionHeader();

  const handleChanged = useCallback(
    (idx: number) => {
      if (idx === 2) {
        window.location.href = "https://linkedin.com/in/peter-sahanaya";
      } else {
        state.onPressedChangeSelected(idx);
        document
          .getElementById(state.listOfOption[idx].value)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [state]
  );

  return (
    <section className="flex justify-around items-center gap-8 text-stone-100">
      {state.listOfOption.map((option, idx) => (
        <div
          onClick={() => handleChanged(idx)}
          className={`cursor-pointer relative flex justify-center items-center p-3 ${
            state.selected === idx ? "text-stone-900 font-[500]" : "text-white"
          } `}
          key={idx}
        >
          <p className="z-20">{option.value}</p>
          {state.selected === idx && (
            <motion.div
              layoutId="tab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              animate={{
                background: state.selected === idx ? "rgb(255 247 237)" : "",
              }}
              className="absolute top-0 left-0 z-[10] w-full h-full p-3 rounded-full"
            ></motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default TabOption;
