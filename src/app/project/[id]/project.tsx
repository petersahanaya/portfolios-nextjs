"use client";

import { StaggerAnimation, fadeInRight, fadeInUp } from "@/animation/stagger";
import ArrowIcon from "@icon/arrow";
import NextJsIcon from "@icon/nextjs";
import NodeJsIcon from "@icon/nodejs";
import TypescriptIcon from "@icon/typescript";
import Slider from "@component/slider";
import { motion } from "framer-motion";
import { useState } from "react";
import { DBProjectType } from "@/db";

type ProjectProps = {
  project: DBProjectType;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <section className="w-full h-full lg:h-[50%]">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Slider imagesSrc={project.imagesSrc} />
        </motion.div>
        <motion.div
          variants={StaggerAnimation(0.12, 0)}
          initial="hidden"
          animate="visible"
          className="flex justify-around items-center mt-4 md:hidden"
        >
          <motion.div variants={fadeInRight}>
            <NextJsIcon width={40} height={40} />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <NodeJsIcon width={40} height={40} />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <TypescriptIcon width={40} height={40} />
          </motion.div>
        </motion.div>
      </section>

      <motion.article
        variants={StaggerAnimation(0.12, 0)}
        initial="hidden"
        animate="visible"
        className="w-full h-full p-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl text-orange-50 font-[700] capitalize md2:text-5xl md:text-4xl xs:text-5xl"
        >
          {project.title}
        </motion.h2>
        <section className="mt-3">
          <motion.p
            variants={fadeInUp}
            className="text-xs text-stone-300 text-justify"
          >
            {project.description}
          </motion.p>
        </section>

        <motion.ul
          variants={fadeInUp}
          className="mt-5 flex flex-col justify-start items-start gap-3 pl-4"
        >
          {project.features.map((feature, idx) => (
            <li
              className="font-[500] list-disc text-orange-50 text-xs uppercase"
              key={idx}
            >
              {feature}
            </li>
          ))}
        </motion.ul>

        <motion.section variants={fadeInUp} className="w-full mt-8">
          <a href={project.url} target="_blank">
            <Button subtitle="visit" />
          </a>
        </motion.section>

        <motion.div
          variants={StaggerAnimation(0.12, 0)}
          initial="hidden"
          animate="visible"
          className="md:flex justify-around items-center mt-4 hidden"
        >
          <motion.div variants={fadeInRight}>
            <NextJsIcon width={40} height={40} />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <NodeJsIcon width={40} height={40} />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <TypescriptIcon width={40} height={40} />
          </motion.div>
        </motion.div>
      </motion.article>
    </>
  );
};

type ButtonProps = {
  subtitle: string;
};

function Button({ subtitle }: ButtonProps) {
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
      <button className="flex justify-start items-center gap-5 px-4 p-2 ">
        <>
          <p
            className={`text-sm tracking-tight font-[500] transition-all text-black ${
              hovered ? "text-white" : ""
            }`}
          >
            {subtitle}
          </p>
          <div className="rotate-[-45deg]">
            <ArrowIcon
              width={12}
              height={12}
              color={hovered ? "#ffffff" : "#000000"}
            />
          </div>{" "}
        </>
      </button>
      <span
        className={`border-[2px] transition-all border-orange-50 absolute w-full h-full z-[5] bottom-[-5px] left-[-5px] ${
          hovered ? "border-stone-800" : ""
        }`}
      ></span>
    </div>
  );
}

export default Project;
