import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard.js";
import Home from "./Home";
const ImageList = props => {
  const imageRender = props.images.map(image => {
    //the src is specified by link in the image object get back by axios
    //don't forget to add the key props
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div>
      <div>Image List</div>
      <Home />
      <div className="image-list">{imageRender}</div>
    </div>
  );
};

export default ImageList;
