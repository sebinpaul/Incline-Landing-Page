import React from "react";
import bg from "../../assets/footer-bg.png";
import css from "./footer.module.css";
import ArrowIcon from "../../assets/arrow.svg.tsx";
import Category from "../Category/category.jsx";
import { categoryList } from "./footer.util.js";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.footerImgContainer}>
        <img src={bg} alt="footer-img" />
      </div>
      <div className={css.footerDetailContainer}>
        <div className={css.footerTitleContainer}>
          <p>Change the way you</p>
          <p>learn, chat, and create</p>
          <p>...</p>
        </div>
        <button>
          Get started now — free <ArrowIcon fill="black" />
        </button>
        <div className={css.categoryContainer}>
          {categoryList.map((category) => (
            <Category
              categoryTitle={category.categoryTitle}
              subCategoryList={category.subCategoryList}
            />
          ))}
        </div>
        <div className={css.footerBase}>
          <span>© 2024 Incline</span>
          <span>System status</span>
          <span>Privacy policy</span>
          <span>Terms</span>
          <span>Legal notice</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
