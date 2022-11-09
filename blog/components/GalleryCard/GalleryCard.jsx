import React from "react";


export const GalleryCard = ({image_src, description}) => {
    return <div>
        <img width="100px" height="100px" src={image_src} alt="ГДЕ?"/>
        <p> {description} </p>
    </div>;
}