import React from "react";

const AIIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main square with text */}
    <rect x="12" y="12" width="20" height="20" fill="black" />
    <text
      x="22"
      y="26"
      fill="white"
      fontSize="12"
      fontFamily="Arial"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      AI
    </text>
    
    {/* Top squares */}
    <rect x="12" y="4" width="4" height="4" fill="black" />
    <rect x="20" y="4" width="4" height="4" fill="black" />
    <rect x="28" y="4" width="4" height="4" fill="black" />
    
    {/* Left squares */}
    <rect x="4" y="12" width="4" height="4" fill="black" />
    <rect x="4" y="20" width="4" height="4" fill="black" />
    <rect x="4" y="28" width="4" height="4" fill="black" />
    
    {/* Right squares */}
    <rect x="36" y="12" width="4" height="4" fill="black" />
    <rect x="36" y="20" width="4" height="4" fill="black" />
    <rect x="36" y="28" width="4" height="4" fill="black" />
    
    {/* Bottom squares */}
    <rect x="12" y="36" width="4" height="4" fill="black" />
    <rect x="20" y="36" width="4" height="4" fill="black" />
    <rect x="28" y="36" width="4" height="4" fill="black" />
  </svg>
);

export default AIIcon;
