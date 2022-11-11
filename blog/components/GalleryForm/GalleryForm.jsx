import React from "react";
import css from "./GalleryForm.module.css"

export const GalleryForm = ({onSubmit}) => {
    return <form className={css.form_main} onSubmit={(e) => {onSubmit(e); e.target.url.value = ""; e.target.description.value = ""}}>
        <button type="submit" className={css.button_add}> + </button>
        <input id="url" type="text" placeholder="url" className={css.input}/>
        <input id="description" type="text" placeholder="description" className={css.input}/>
    </form>;
}