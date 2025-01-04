import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "@/redux/modalSlice";
import Image from 'next/image';

function Work({ data }) {
  const { image, name, technologies, id } = data;
  const dispatch = useDispatch();

  const openPopup = (e) => {
    dispatch(modalActions.openModal(e.target.dataset.id));
  };

  return (
    <div className="work-container">
      <div className="work">
        <Image src={image} alt={name} layout="responsive" width={500} height={300} />
        <img src={image} alt={name} />
      </div>
      <div className="details-container">
        <h3>{name}</h3>
        <ul className="skills">
          {technologies.map((item) => (
            <li key={item} className="skill-tag skill-tag--grey">
              {item}
            </li>
          ))}
        </ul>
        <button
          data-id={id}
          onClick={openPopup}
          className="button button-primary"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Work;