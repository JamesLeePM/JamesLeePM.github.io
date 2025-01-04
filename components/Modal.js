import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../redux/modalSlice";
import styles from "./Modal.module.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]} onClick={closeModal}>
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-button"]} onClick={closeModal}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
