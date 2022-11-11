import React, {useState} from "react";
import {GalleryCard} from "../GalleryCard/GalleryCard";
import css from "./GalleryCards.module.css";

export const GalleryCards = ({content}) => {
    const CARDS_ON_PAGE = 2;
    let [pageState, setPageState] = useState(1);
    return <div>
        <div className={css.page_switcher}>
            <button onClick={() => setPageState((ls) => ls > 1 ? ls - 1 : ls)} className={css.button}> &lt; </button>
            <button onClick={() => setPageState((ls) => ls < content.length / CARDS_ON_PAGE ? ls + 1: ls)} className={css.button}> &gt; </button>
            &nbsp; страница <span id="currentPage" className={css.page_num}>{pageState}</span> из <span id="allPages" className={css.page_num}>{content.length ? Math.ceil(content.length / CARDS_ON_PAGE) : 1}</span> &nbsp;
        </div>
        {content.map((el, i) => <GalleryCard image_src={el.image_src} description={el.description} key={i}/>).slice((pageState - 1) * CARDS_ON_PAGE, pageState * CARDS_ON_PAGE)}

    </div>;
}