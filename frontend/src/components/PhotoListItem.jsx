import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({element, passPhotoId, setOpenModal, switchLike, like}) => {

  return (
    <div className="photo-list">
        <div className="photo-list__item">
        <PhotoFavButton 
        passPhotoId={passPhotoId} 
        id={element.id}
        switchLike={switchLike}
        like={like}/>
        <img className="photo-list__image" 
        src={element.urls.regular} 
        alt="display image"
        onClick={() => setOpenModal(element)}></img>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={element.user.profile} alt="profile image"></img>
          <div className="photo-list__user-info">
            {element.user.username}
            <div className="photo-list__user-location">
              {`${element.location.city}, ${element.location.country}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
