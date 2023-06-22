"use client";

import ArrowIcon from "@icon/arrow";
import { StaggerAnimation, WordAnimation, fadeInUp } from "@animation/stagger";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useIntersection } from "@hooks/inView";
import Container from "@component/3d/model";

const FirstPage = () => {
  const ref = useIntersection(0);

  return (
    <main
      id="home"
      ref={ref}
      className="w-screen h-full sm:h-screen snap-center bg-stone-900 overflow-hidden text-xs uppercase pt-6"
    >
      <FirstPageArticle />
    </main>
  );
};

function FirstPageArticle() {
  const container = useRef<HTMLDivElement | null>(null);
  const inView = useInView(container, { amount: "some" });

  const word = "Front End Developer";

  const description =
    "as a front end developer, i can combine my creativity with something that i really love, I write clean and efficient code using Next Js, Typescript, and Tailwind, ensuring that websites are responsive and compatible across different devices and browsers. I also prioritize performance optimization to guarantee fast-loading websites.";

  const words = word.split(" ");

  return (
    <motion.article
      ref={container}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : -200}px)`,
        transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
      }}
      variants={StaggerAnimation(0.12, 0)}
      initial="hidden"
      animate="visible"
      className="sm:px-14 px-10 py-8 grid md2:grid-cols-2 grid-cols-1 justify-items-center w-full h-full"
    >
      <section className="text-orange-50 w-full md2:w-full xs:mt-20 mt-8">
        <motion.article
          variants={StaggerAnimation(0.12, 0)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-start gap-7 items-center"
        >
          {words.map((word, idx) => (
            <motion.h2
              style={{
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 200}px)`,
                transitionDelay: `${idx * (200 + 1000)}ms`,
                transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
              }}
              variants={WordAnimation(0.2)}
              key={idx}
              className="text-5xl font-[900] capitalize 2xl:text-8xl md2:text-7xl sm:text-[6rem] xs:text-[3.4rem]"
            >
              {word}
            </motion.h2>
          ))}

          <motion.p
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 200}px)`,
              transitionDelay: `1400ms`,
              transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
            }}
            variants={fadeInUp}
            className="text-stone-400 text-xs tracking-wider lowercase leading-4 text-justify 2xl:w-[80%] lg:w-[85%] w-[100%] md:text-[.7rem] text-[.65rem]"
          >
            {description}
          </motion.p>
          <motion.a
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 200}px)`,
              transitionDelay: `1600ms`,
              transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
            }}
            variants={fadeInUp}
            className="cursor-pointer 2xl:w-[80%] lg:w-[85%] w-full"
            href="https://linkedin.com/in/peter-sahanaya"
            target="_blank"
          >
            <Button />
          </motion.a>

          <motion.section
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 200}px)`,
              transitionDelay: `1800ms`,
              transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
            }}
            variants={fadeInUp}
            className="mt-16"
          >
            <p className="text-xs capitalize text-stone-300">
              Find me at{" "}
              <a
                className="underline text-stone-100"
                href="https://github.com/petersahanaya"
              >
                Github
              </a>{" "}
              and{" "}
              <a
                className="underline text-stone-100"
                href="https://linkedin.com/in/peter-sahanaya"
              >
                LinkedIn
              </a>
            </p>
          </motion.section>
        </motion.article>
      </section>
      <section className="w-full translate-y-28 hidden md2:inline-block">
        <Container />
      </section>
    </motion.article>
  );
}

function Button() {
  const [hovered, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
      className={`relative z-10 bg-orange-50 rounded-sm w-full ${
        hovered ? "bg-stone-800" : ""
      } transition-all`}
    >
      <button className="flex justify-start items-center gap-12 px-4 p-2 ">
        <div className="">
          <ArrowIcon
            width={30}
            height={30}
            color={hovered ? "#ffffff" : "#000000"}
          />
        </div>

        <p
          className={`text-sm font-[500] transition-all text-black ${
            hovered ? "text-white" : ""
          }`}
        >
          Let&apos;s work together
        </p>
      </button>
      <span
        className={`border-[2px] transition-all border-orange-50 absolute w-full h-full z-[5] bottom-[-5px] left-[-5px] ${
          hovered ? "border-stone-800" : ""
        }`}
      ></span>
    </div>
  );
}

export default FirstPage;
