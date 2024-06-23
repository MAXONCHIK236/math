import React from "react";
import styles from "./header.module.scss";
import logo from "../../assents/header__img/logo.svg";
const Header = () => {
  return (
    <header>
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:"16px"
      }} className="container">
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.header__title}>
        <p> Математический<br/> Тренажер</p>
      </div>
      </div>
    </header>
  );
};
export default Header;
