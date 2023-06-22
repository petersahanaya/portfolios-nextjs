"use client";
import { useState } from "react";
import ArrowIcon from "@icon/arrow";

type ButtonProps = {
  subtitle: string;
  theme: "white" | "dark";
};

function Button({ subtitle, theme }: ButtonProps) {
  const [hovered, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
      className={`relative z-10 bg-orange-50 rounded-sm w-full ${
        theme === "dark" ? "bg-stone-800" : ""
      } transition-all`}
    >
      <button className="flex justify-start items-center gap-12 px-4 p-2 ">
        <div className={`${hovered ? "backdrop-invert-0" : ""}`}>
          <ArrowIcon
            width={30}
            height={30}
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>

        <p
          className={`text-sm font-[500] transition-all text-black ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {subtitle}
        </p>
      </button>
      <span
        className={`border-[2px] transition-all border-orange-50 absolute w-full h-full z-[5] bottom-[-5px] left-[-5px] ${
          theme === "dark" ? "border-stone-800" : ""
        }`}
      ></span>
    </div>
  );
}

export default Button;
