import React from "react";
import {GalleryCard} from "../GalleryCard/GalleryCard";

export const GalleryCards = ({content}) => {
    return <div>
        {content.map((el, i) => <GalleryCard image_src={el.image_src} description={el.description} key={i}/>)}
    </div>;
}