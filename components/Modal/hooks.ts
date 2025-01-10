import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalSlice";
import { Project, NavigationHandlers } from "./types";

export const useModalState = (isOpen: boolean, project: Project | null) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return { currentImageIndex, setCurrentImageIndex, handleClose };
};

export const useImageNavigation = (
  images: string[] | undefined,
  currentIndex: number,
  setCurrentIndex: (index: number) => void
) => {
  const handleNext = useCallback(() => {
    if (!images) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    if (!images) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images, setCurrentIndex]);

  return { handleNext, handlePrev };
};

export const useKeyboardNavigation = (
  isOpen: boolean,
  images: string[] | undefined,
  handlers: NavigationHandlers
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const keyHandlers: Record<string, () => void> = {
        Escape: handlers.onClose,
        ArrowLeft: () => images?.length > 1 && handlers.onPrev?.(),
        ArrowRight: () => images?.length > 1 && handlers.onNext?.(),
      };

      const handler = keyHandlers[e.key];
      if (handler) handler();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images, handlers]);
};

export const useBodyLock = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
};
