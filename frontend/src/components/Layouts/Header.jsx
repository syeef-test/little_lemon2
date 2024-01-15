import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/headerImage4.jpg";
import HeaderCartButton from "./HeaderCartButton.jsx";
function Header() {
  return (
    <>
      <header className={classes.header}>
        Little Lemon
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food " />
      </div>
    </>
  );
}

export default Header;
