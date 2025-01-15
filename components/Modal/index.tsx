import React, { memo } from "react";
import { FaTimes } from "react-icons/fa";
import { ModalProps } from "./types";
import {
  useModalState,
  useKeyboardNavigation,
  useBodyLock,
  useImageControls,
} from "./hooks";
import { getProjectImages } from "./utils";
import { ImageGallery } from "./components/ImageGallery";
import { ProjectContent } from "./components/ProjectDetails";
import { ModalWrapper } from "./components/ModalWrapper";
import styles from "./Modal.module.scss";

const CloseButton = memo(({ onClick }: { onClick: () => void }) => (
  <button
    className={styles.closeButton}
    onClick={onClick}
    aria-label="Close modal"
  >
    <FaTimes />
  </button>
));

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
  const { handleNext, handlePrev } = useImageControls({ images });

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
