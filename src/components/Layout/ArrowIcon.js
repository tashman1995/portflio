import React from "react";

const ArrowIcon = ({ scale, fill, strokeColor, strokeWidth }) => {
  return (
    <svg
      style={{ transform: `scale(${scale})`, transition: "all .2s ease-out" }}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07499 0.652759L2.09554 4.31562L10.9752 4.31562L0.512818 13.9757L3.30828 16.5568L13.7707 6.8967L13.7707 15.0954L17.7378 15.1144L17.7378 0.652758L2.07499 0.652759Z"
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default ArrowIcon;
