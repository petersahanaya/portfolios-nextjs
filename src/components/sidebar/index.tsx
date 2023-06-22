"use client";

import { useSidebar } from "@store/sidebarStore";
import CloseIcon from "@icon/close";
import EyeIcon from "@icon/eye";
import { useSelectedOptionHeader } from "@store/headerOption";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp } from "@/animation/stagger";
import Link from "next/link";

const ease2 = [0.76, 0, 0.24, 1];

const bouncyFadeRight = {
  hidden: {
    x: "100vw",
    width: "0%",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: ease2,
    },
  },
  visible: {
    x: "0",
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: ease2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const SideBar = () => {
  const state = useSelectedOptionHeader();
  const sidebarState = useSidebar();

  const onPressedSelected = (idx: number) => {
    state.onPressedChangeSelected(idx);

    sidebarState.onPressedToggleSidebar();

    if (idx === 2) {
      window.location.href = "https://linkedin.com/in/peter-sahanaya";
    } else {
      state.onPressedChangeSelected(idx);
      document
        .getElementById(state.listOfOption[idx].value)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {sidebarState.open && (
          <motion.main
            variants={bouncyFadeRight}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-screen overflow-hidden h-screen fixed top-0 left-0 bg-stone-800 flex flex-col justify-start items-start gap-4 z-50"
          >
            <header className="w-full flex justify-between items-center p-2 px-7">
              <Link href="/">
                <EyeIcon width={40} height={40} color="#ffffff" />
              </Link>
              <button onClick={() => sidebarState.onPressedToggleSidebar()}>
                <CloseIcon width={45} height={45} color="#ffffff" />
              </button>
            </header>
            {state.listOfOption.map((option, idx) => (
              <motion.div
                variants={fadeInUp}
                onClick={() => onPressedSelected(idx)}
                className="relative w-full border-1px border-red-500"
                key={idx}
              >
                <p
                  className={`text-6xl z-40 font-[700] ${
                    state.selected === idx ? "text-stone-900" : "text-stone-700"
                  }`}
                >
                  {option.value}
                </p>
                {state.selected === idx && (
                  <motion.div
                    style={{
                      background:
                        state.selected === idx ? "rgb(255 247 237)" : "",
                    }}
                    layoutId="tab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="absolute top-0 left-0 z-[-1] w-full h-full p-2"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;

/*style={{
          clipPath: sidebarState.open
            ? "circle(200% at 99% 0%)"
            : "circle(0% at 99% 0%)",
          transition: "clip-path 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
  }}*/
