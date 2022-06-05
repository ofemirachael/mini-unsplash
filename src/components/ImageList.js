import "./ImageList.css";
import ImageCard from './ImageCard';
import React from 'react';


const ImageList = (props) => {
    //map over prop.image
   const images = props.images.map((image) => {
        return <ImageCard alt="description" key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;