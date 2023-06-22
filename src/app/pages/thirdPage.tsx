"use client";

import { useIntersection } from "@hooks/inView";
import Form from "../form";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Toast from "@component/toast";

const ThirdPage = () => {
  const ref = useIntersection(3);
  const container = useRef<HTMLDivElement | null>(null);
  const inView = useInView(container, { amount: "some" });
  const [state, setState] = useState({
    error: false,
    success: false,
    loader: false,
  });

  return (
    <main
      id="contact"
      ref={ref}
      className="w-screen snap-center overflow-hidden bg-stone-900 xs:px-16 px-8 pt-20 pb-32"
    >
      {state.success && <Toast message="successfully" type="success" />}
      {state.error && <Toast message="error" type="error" />}

      <section ref={container} className=" mt-10 px-0 pb-11">
        <h2 className="text-5xl text-orange-50 font-[800] sm:text-[6rem] sm:px-6 px-2 md2:text-7xl xs:text-6xl">
          Contact
        </h2>
      </section>
      <article
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? 0 : 200}px)`,
          transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);",
        }}
        className="lg:w-[50%] md2:w-[60%] w-full"
      >
        <Form state={state} setState={setState} />
      </article>
    </main>
  );
};

//Love to hear from you 🫵

export default ThirdPage;
