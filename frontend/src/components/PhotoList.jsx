import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list" data="data">
      {photos.map((element) => (
        <PhotoListItem key={element.id} element={element}/>
      ))}
    </ul>
  );
};

export default PhotoList;
