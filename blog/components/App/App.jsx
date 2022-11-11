import React from "react";
import css from "./App.module.css"

export const App = ({children}) => {
    return (
        <div className={css.div_app}>
            {children}
        </div>
    );
};
