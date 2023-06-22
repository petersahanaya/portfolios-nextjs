"use client";

import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "@icon/arrow";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { formField } from "@/app/form";

type SelectProps = {
  setValue: UseFormSetValue<formField>;
  listOfOption: formField["interest"][];
};

const popUpVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Select({ setValue, listOfOption }: SelectProps) {
  const [selected, setSelected] = useState<null | number>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onPressedOpenSelect = (e: any) => {
      if (e.key === "ArrowUp") {
        setSelected((prev) => {
          if (prev === 0) {
            return listOfOption.length - 1;
          } else {
            return prev! - 1;
          }
        });
      }

      if (e.key === "ArrowDown") {
        if (!open) {
          setOpen(true);
        }

        setSelected((prev) => {
          if (prev === null) {
            return 0;
          } else if (prev === listOfOption.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }

      if (e.key === "Enter" && open) {
        setValue("interest", listOfOption[selected!]);

        setOpen(false);
      }

      if (e.key === "Esc") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onPressedOpenSelect);

    return () => {
      window.removeEventListener("keydown", onPressedOpenSelect);
    };
  }, [listOfOption, listOfOption.length, open, selected, setValue]);

  return (
    <article className="w-full">
      <section
        onClick={() => setOpen((prev) => !prev)}
        className="w-full relative bg-stone-600 p-3"
      >
        <p
          className={`text-xs ${
            selected === null ? "text-stone-400 " : "text-stone-200 uppercase"
          }`}
        >
          {selected === null
            ? "what do you interest"
            : listOfOption[selected].value}
        </p>
        <div
          className={`absolute top-[28%] right-[10px] transition-all rotate-180 ${
            open ? "rotate-90" : ""
          }`}
        >
          <ArrowIcon width={20} height={20} color={"#ffffff"} />
        </div>
      </section>

      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            variants={popUpVariants}
            initial="hidden"
            animate="visible"
            className="w-full overflow-hidden p-2 bg-stone-100 mt-3"
          >
            {listOfOption.map((option, idx) => (
              <motion.div
                onClick={() => setValue("interest", listOfOption[idx])}
                key={idx}
                className={`text-sm cursor-pointer tracking-tighter flex flex-col justify-start items-start gap-2 p-2 ${
                  selected === idx ? "bg-stone-800 text-stone-100" : ""
                }`}
              >
                <motion.p variants={textVariants}>{option.value}</motion.p>
              </motion.div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  );
}

export default Select;
