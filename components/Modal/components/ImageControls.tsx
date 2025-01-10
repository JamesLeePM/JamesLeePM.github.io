import React, { memo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../Modal.module.scss";

export const NavigationButton = memo(
  ({
    direction,
    onClick,
  }: {
    direction: "prev" | "next";
    onClick: (e: React.MouseEvent) => void;
  }) => (
    <button
      className={`${styles.imageNav} ${styles[direction]}`}
      onClick={onClick}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} image`}
    >
      {direction === "prev" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  )
);

export const ImageDot = memo(
  ({
    index,
    isActive,
    onClick,
  }: {
    index: number;
    isActive: boolean;
    onClick: (e: React.MouseEvent) => void;
  }) => (
    <button
      className={`${styles.dot} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-label={`Go to image ${index + 1}`}
      role="tab"
      aria-selected={isActive}
    />
  )
);
