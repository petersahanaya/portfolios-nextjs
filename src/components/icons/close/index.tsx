"use client";

import { motion } from "framer-motion";

const CloseIcon = ({ width, height, color = "#000000" }: IconProps) => {
  return (
    <>
      <motion.svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Menu / Close_SM">
            {" "}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              id="Vector"
              d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></motion.path>{" "}
          </g>{" "}
        </g>
      </motion.svg>
    </>
  );
};

export default CloseIcon;
