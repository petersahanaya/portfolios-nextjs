"use client";

const BurgerIcon = ({ width, height, color = "#ffffff" }: IconProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        enable-background="new 0 0 12 12"
        id="Слой_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <rect
              fill={color}
              height="1"
              width="11"
              x="0.5"
              y="5.5"
            ></rect>{" "}
            <rect fill={color} height="1" width="11" x="0.5" y="2.5"></rect>{" "}
            <rect fill={color} height="1" width="11" x="0.5" y="8.5"></rect>{" "}
          </g>{" "}
        </g>
      </svg>
    </>
  );
};

export default BurgerIcon;
