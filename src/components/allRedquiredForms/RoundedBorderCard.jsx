import React from "react";
import styles from "./styles.module.scss";


const RoundedBorderCard = ({ children, customStyles }) => {
  return <div className={`rounded-xl w-full border p-3 md:p-4 lg:p-6 bg-white border-lightblue shadow-sm ${customStyles}`}>{children}</div>;
};

export default RoundedBorderCard;
