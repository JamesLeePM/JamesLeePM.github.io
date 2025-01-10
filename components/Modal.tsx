import React, { memo, useState, useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/modalSlice";
import { ImageGallery } from "./ImageGallery";
import { ProjectContent } from "./ProjectContent";
import styles from "./Modal.module.scss";

// Types
export interface Project {
  id: string;
  name: string;
  description: string;
  role?: string;
  timeline?: string;
  images?: string[];
  image?: string;
  metrics?: Record<string, string | number>;
  recognition?: string[];
  technologies: string[];
  link?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Utils
const getProjectImages = (project: Project | null) =>
  project?.images || (project?.image ? [project.image] : undefined);

// Hooks
const useModalState = (isOpen: boolean, project: Project | null) => {
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
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
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

const useKeyboardNavigation = (
  isOpen: boolean,
  images: string[] | undefined,
  handlers: {
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
  }
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

const useBodyLock = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
};

// Components
const CloseButton = memo(({ onClick }: { onClick: () => void }) => (
  <button
    className={styles.closeButton}
    onClick={onClick}
    aria-label="Close modal"
  >
    <FaTimes />
  </button>
));

const ModalWrapper = memo(
  ({
    onClose,
    children,
  }: {
    onClose: () => void;
    children: React.ReactNode;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {children}
      </motion.div>
    </motion.div>
  )
);

const ModalContent = memo(
  ({
    project,
    images,
    currentIndex,
    onIndexChange,
  }: {
    project: NonNullable<ModalProps["project"]>;
    images: string[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
  }) => (
    <div className={styles.modalContent}>
      <ImageGallery
        images={images}
        currentIndex={currentIndex}
        onIndexChange={onIndexChange}
        projectName={project.name}
      />
      <ProjectContent project={project} />
    </div>
  )
);

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  const { currentImageIndex, setCurrentImageIndex, handleClose } =
    useModalState(isOpen, project);
  const images = getProjectImages(project);
  const { handleNext, handlePrev } = useImageNavigation(
    images,
    currentImageIndex,
    setCurrentImageIndex
  );

  const handleModalClose = () => {
    onClose();
    handleClose();
  };

  useKeyboardNavigation(isOpen, images, {
    onClose: handleModalClose,
    onNext: handleNext,
    onPrev: handlePrev,
  });

  useBodyLock(isOpen);

  if (!isOpen || !project || !images) return null;

  return (
    <ModalWrapper onClose={handleModalClose}>
      <CloseButton onClick={handleModalClose} />
      <ModalContent
        project={project}
        images={images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </ModalWrapper>
  );
};

export default memo(Modal);
