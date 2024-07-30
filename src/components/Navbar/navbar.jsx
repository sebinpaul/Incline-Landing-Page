import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import css from "./navbar.module.css";
import ArrowIcon from "../../assets/arrow.svg.tsx";

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={css.menuContainer}>
        <NavLink to={"/features"} className={css.menuItems}>
          Features
        </NavLink>
        <NavLink to={"/customers"} className={css.menuItems}>
          Customers
        </NavLink>
        <NavLink to={"/blog"} className={css.menuItems}>
          Blog
        </NavLink>
        <NavLink to={"/docs"} className={css.menuItems}>
          Docs
        </NavLink>
        <NavLink to={"/pricing"} className={css.menuItems}>
          Pricing
        </NavLink>
      </div>
      <div className={css.navActions}>
        <button className={css.loginBtn}>
          <NavLink to={"/login"} className={css.loginIn}>
            Log in
          </NavLink>
        </button>
        <button className={css.signupBtn}>
          <NavLink to={"/sign-up"} className={css.signUp}>
            Sign up &nbsp;&nbsp;
            <ArrowIcon />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
