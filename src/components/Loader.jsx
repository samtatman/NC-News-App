import React from "react";
import Spinner from "react-spinkit";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <Spinner name="three-bounce" fadeIn="half" className={style.spinner} />
  );
};

export default Loader;
