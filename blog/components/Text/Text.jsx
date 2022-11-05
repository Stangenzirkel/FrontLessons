import React from "react";
import css from "./Button.module.css";

export const Text = ({children}) => {
    return <p className={css.p}> {children} </p>;
}