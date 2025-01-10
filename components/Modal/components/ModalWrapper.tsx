import React, { memo } from "react";
import { motion } from "framer-motion";
import styles from "../Modal.module.scss";

interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalWrapper = memo(({ onClose, children }: ModalWrapperProps) => (
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
));
