import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, passPhotoId, setOpenModal, switchLike, like}) => {
  return (
    <ul className="photo-list" data="data">
      {photos.map((element) => (
        <PhotoListItem 
        key={element.id} 
        element={element} 
        passPhotoId={passPhotoId} 
        setOpenModal={setOpenModal}
        switchLike={switchLike}
        like={like}/>
      ))}
    </ul>
  );
};

export default PhotoList;
