import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationButton, ImageDot } from "./ImageControls";
import styles from "../Modal.module.scss";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  projectName: string;
}

export const ImageGallery = memo(
  ({ images, currentIndex, onIndexChange, projectName }: ImageGalleryProps) => {
    const handlePrev = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      },
      [currentIndex, images.length, onIndexChange]
    );

    const handleNext = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onIndexChange((currentIndex + 1) % images.length);
      },
      [currentIndex, images.length, onIndexChange]
    );

    return (
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${projectName} - Image ${currentIndex + 1}`}
            className={styles.projectImage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <NavigationButton direction="prev" onClick={handlePrev} />
            <NavigationButton direction="next" onClick={handleNext} />
            <div className={styles.imageDots} role="tablist">
              {images.map((_, index) => (
                <ImageDot
                  key={index}
                  index={index}
                  isActive={index === currentIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    onIndexChange(index);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
);
