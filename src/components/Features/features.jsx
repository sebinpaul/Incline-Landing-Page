import React from "react";
import css from "./features.module.css";
import Card from "../Card/card";
import cardList from "./features.util";

const Features = () => {
  return (
    <div className={css.container}>
      <div className={css.featureDetailContainer}>
        <div className={css.featureTitleContainer}>
          <p>Create better with</p>
          <p>your Research</p>
        </div>
        <div className={css.featureSubTitleContainer}>
          <p>We know just research is not enough.</p>
          <p>
            Incline helps you learn from, talk with and create using your
            research.
          </p>
        </div>
        <div className={css.featureCards}>
          {cardList.map((item) => {
            return <Card {...item} />;
          })}
        </div>
        <div className={css.signUpBtnContainer}>
          <button type="button" className={css.signUpBtn}>
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
