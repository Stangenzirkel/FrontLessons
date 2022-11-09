import {GalleryForm} from "../../components/GalleryForm/GalleryForm";
import {GalleryCards} from "../../components/GalleryCards/GalleryCards";
import {useState} from "react";

export default function indexGallery() {
    let [contentState, setContentState] = useState([]);
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!setContentState) return;
        setContentState(ls => [...(ls || []), {image_src: e.target.url.value, description: e.target.description.value}]);
    }

    return <div>
        <GalleryForm onSubmit={handleFormSubmit}/>
        {contentState && <GalleryCards content={contentState}/>}
    </div>;
}


