import React from "react";
import css from "./GalleryCard.module.css"


export const GalleryCard = ({image_src, description}) => {
    return <div className={css.card}>
        <img src={image_src} alt="ГДЕ?" className={css.image}/>
        <p> {description} </p>
    </div>;
}