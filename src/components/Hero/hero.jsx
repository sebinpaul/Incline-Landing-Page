import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/hero-background.svg";
import css from "./hero.module.css";
import ArrowIcon from "../../assets/arrow.svg.tsx";

const Hero = () => {
  return (
    <div className={css.container}>
      <img src={bg} alt="hero-bg" />
      <div className={css.heroDetailContainer}>
        <div className={css.heroTitleContainer}>
          <p>Instantly create a</p>
          <p>Knowledge Base</p>
          <p>to Research</p>
        </div>
        <div className={css.heroSubtitleContainer}>
          <p>
            Incline helps you seamlessly talk with your research whether you are
            an
          </p>
          <p>Entrepreneur, Content Creator, Analyst, Developer or a Student</p>
        </div>
        <div className={css.ctaContainer}>
          <button className={css.signUpBtn}>
            <Link>Sign up free</Link>&nbsp;&nbsp;
            <ArrowIcon />
          </button>
          <button className={css.tryItLiveBtn}>
            <Link>Try it live</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
