import React from "react";
import css from "./card.module.css";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/arrow.svg.tsx";

const Card = ({ img, title, tags, description, link }) => {
  return (
    <div className={css.container}>
      <img src={img} alt="card-img" className={css.featureImg} />
      <span className={css.cardTitle}>{title}</span>
      <div className={css.tagsContainer}>
        {tags.map((tag) => {
          return <span className={css.featureTag}>{tag}</span>;
        })}
      </div>
      <span className={css.featureDescription}>{description}</span>
      <Link to={link} className={css.learnMoreLink}>
        <span>
          Learn More&nbsp;
          <ArrowIcon fill="#0D0D0D" />
        </span>
      </Link>
    </div>
  );
};

export default Card;
