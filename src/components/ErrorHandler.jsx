import React from "react";
import style from "./ErrorHandler.module.css";

const ErrorHandler = props => {
  const { error } = props;
  if (error === "Page Not Found") {
    return (
      <div className={style.main}>
        <h3>Error</h3>
        <p>status: 404</p>
        <p>Page Not Found</p>
      </div>
    );
  } else
    return (
      <div className={style.main}>
        <h3>Error</h3>
        <p>status: {error.status}</p>
        <p>{error.msg}</p>
      </div>
    );
};

export default ErrorHandler;
