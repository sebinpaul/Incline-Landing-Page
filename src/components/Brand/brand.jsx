import React from "react";
import { brandList } from "./brand.util";
import css from "./brand.module.css";

const Brand = () => {
  return (
    <div className={css.container}>
      {brandList.map((brand) => {
        return <img src={brand.img} alt={brand.name} />;
      })}
    </div>
  );
};

export default Brand;
