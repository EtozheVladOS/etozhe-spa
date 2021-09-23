import "../Projects/styles.scss";
import React from "react";

export default function ProjectItem(props) {
  const { path, label, src, text } = props;

  return (
    <li className="projects__item">
      <a
        className="projects__item__link"
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        <figure className="projects__item__pic-wrap" data-category={label}>
          <img
            src={src}
            alt={label}
            className="projects__item__img"
          />
        </figure>

        <div className="projects__item__info">
          <h5 className="projects__item__text">
            {text}
          </h5>
        </div>
      </a>
    </li>
  )
}
