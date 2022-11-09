import React from "react";

export const GalleryForm = ({onSubmit}) => {
    return <form onSubmit={(e) => {onSubmit(e)}}>
        <button type="submit"> Add </button>
        <input id="url" type="text" placeholder="url"/>
        <input id="description" type="text" placeholder="description"/>
    </form>;
}