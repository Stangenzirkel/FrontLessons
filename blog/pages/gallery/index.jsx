import {GalleryForm} from "../../components/GalleryForm/GalleryForm";
import {GalleryCards} from "../../components/GalleryCards/GalleryCards";
import {useState} from "react";
import {App} from "../../components/App/App";

export default function indexGallery() {
    let [contentState, setContentState] = useState([]);
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!setContentState) return;
        setContentState(ls => [...(ls || []), {image_src: e.target.url.value, description: e.target.description.value}]);
    }

    return <div>
    <App>
        <GalleryForm onSubmit={handleFormSubmit}/>
        {contentState && <GalleryCards content={contentState}/>}
    </App>
    </div>
}


