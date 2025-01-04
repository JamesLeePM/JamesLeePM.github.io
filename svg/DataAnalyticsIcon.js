import React from "react";

const DataAnalytics = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="36" height="28" rx="2" stroke="black" strokeWidth="2" />
    <path
      d="M10 24V18M16 24V12M22 24V16M28 24V14M34 24V20"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 26H40"
      stroke="black"
      strokeWidth="1"
    />
    <path
      d="M16 36H28M18 38H26"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DataAnalytics;
