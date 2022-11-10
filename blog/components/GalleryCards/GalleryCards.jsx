import React, {useState} from "react";
import {GalleryCard} from "../GalleryCard/GalleryCard";

export const GalleryCards = ({content}) => {
    const CARDS_ON_PAGE = 2;
    let [pageState, setPageState] = useState(1);
    return <div>
        {content.map((el, i) => <GalleryCard image_src={el.image_src} description={el.description} key={i}/>).slice((pageState - 1) * CARDS_ON_PAGE, pageState * CARDS_ON_PAGE)}
        <div style={{bottom: 0}}>
            <button onClick={() => setPageState((ls) => ls > 1 ? ls - 1 : ls)}> prev </button>
            <span id="currentPage">{pageState}</span>
            <button onClick={() => setPageState((ls) => ls < content.length / CARDS_ON_PAGE ? ls + 1: ls)}> next </button>
        </div>
    </div>;
}