"use client";

import { useEffect, useState } from "react";
import CheckIcon from "../icons/check";
import CloseIcon from "../icons/close";
import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  type: "success" | "error";
  message: string;
};

const Toast = ({ message, type }: ToastProps) => {
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMount(false);
    }, 1500);
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        {mount && (
          <motion.section
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            className="p-2 bg-stone-700 flex flex-col justify-start items-start rounded-md fixed bottom-[40px] right-[40px]"
          >
            <div className="w-full flex justify-around items-center gap-4">
              <p className="text-sm text-white">{message}</p>
              {type === "success" ? (
                <CheckIcon width={20} height={20} color="#60dd00" />
              ) : (
                <CloseIcon width={20} height={20} color="#e70000" />
              )}
            </div>
            <p className="text-stone-400 text-[.7rem]">
              {new Date(Date.now()).getHours()} :{" "}
              {new Date(Date.now()).getMinutes()}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toast;
