import React from "react";
import css from "./category.module.css";

const Category = ({ categoryTitle, subCategoryList }) => {
  return (
    <div className={css.container}>
      <span className={css.categoryTitle}>{categoryTitle}</span>
      {subCategoryList.map((subCategory) => (
        <span className={css.subCategory}>{subCategory}</span>
      ))}
    </div>
  );
};

export default Category;
