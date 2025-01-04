import React from "react";

const ProductManagement = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12L20 8L28 12L36 8V32L28 36L20 32L12 36V12Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8V32"
      stroke="black"
      strokeWidth="2"
    />
    <path
      d="M28 12V36"
      stroke="black"
      strokeWidth="2"
    />
    <circle
      cx="8"
      cy="24"
      r="4"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);

export default ProductManagement;
