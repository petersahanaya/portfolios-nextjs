"use client";

import ArrowIcon from "@icon/arrow";
import { DB, Project } from "@/db";
import { useIntersection } from "@hooks/inView";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment, useRef } from "react";

const SecondPage = () => {
  const ref = useIntersection(1);
  const container = useRef<null | HTMLDivElement>(null);
  const inView = useInView(container, { amount: "some" });

  return (
    <main
      id="work"
      ref={ref}
      className="w-screen overflow-hidden h-max bg-stone-900 scroll-center snap-center px-8 py-8 pt-24 pb-40"
    >
      <section>
        <h2 className="font-[900] text-orange-50 sm:px-12 px-7 md2:text-7xl sm:text-8xl xs:text-6xl text-5xl">
          Project&apos;s
        </h2>
      </section>

      <section
        style={{
          opacity: inView ? 1 : 0,
        }}
        ref={container}
        className={`w-full h-full grid md2:grid-cols-2 md2:grid-rows-2 grid-cols-1 grid-rows-none mt-9 justify-items-center transition-opacity`}
      >
        {DB.map((project, idx) => (
          <Fragment key={idx}>
            <Card {...project} idx={idx} inView={inView} />
          </Fragment>
        ))}
      </section>
    </main>
  );
};

type ProjectWithIdx = {
  idx: number;
  inView: boolean;
} & Project;

function Card({ id, imageSrc, subtitle, url, idx, inView }: ProjectWithIdx) {
  return (
    <>
      <article
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? 0 : 200}px)`,
          transitionDelay: `${idx * 100}ms`,
          transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
        }}
        onClick={() => redirect(url)}
        className="w-[80%] flex flex-col justify-around items-start cursor-pointer sm:h-[250px] h-[200px]"
      >
        <Link
          href={url}
          className="w-full h-full  flex flex-col justify-around items-start cursor-pointer"
        >
          <section className="relative w-full h-[80%] bg-orange-100 rounded-md">
            <Image
              className="object-contain"
              src={imageSrc}
              alt={subtitle}
              fill
            />
          </section>
          <div className="w-[60%] pl-6 hover:opacity-80 transition-opacity">
            <button
              className={`flex justify-start items-center gap-4 transition-all hover:gap-6`}
            >
              <p className="text-white">{subtitle}</p>
              <ArrowIcon width={20} height={20} color="#ffffff" />
            </button>
          </div>
        </Link>
      </article>
    </>
  );
}

export default SecondPage;
