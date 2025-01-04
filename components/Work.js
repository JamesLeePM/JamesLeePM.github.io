import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../redux/modalSlice";
import Image from 'next/image';
import s from "./Work.module.scss";

function Work({ data }) {
  const { image, name, technologies, description, id } = data;
  const dispatch = useDispatch();

  const openPopup = () => {
    const content = (
      <div>
        <h2>{name}</h2>
        <div className={s["image-container"]}>
          <Image src={image} alt={name} fill />
        </div>
        <p>{description}</p>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
    dispatch(modalActions.openModal(content));
  };

  return (
    <div className={s["work-container"]}>
      <div className={s["work"]}>
        <div className={s["image-container"]}>
          <Image src={image} alt={name} fill />
        </div>
      </div>
      <div className={s["details-container"]}>
        <h3>{name}</h3>
        <ul className={s["skills"]}>
          {technologies.map((item) => (
            <li key={item} className={`${s["skill-tag"]} ${s["skill-tag--grey"]}`}>
              {item}
            </li>
          ))}
        </ul>
        <button
          data-id={id}
          onClick={openPopup}
          className={`${s["button"]} ${s["button-primary"]}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Work;