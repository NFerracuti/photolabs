import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({element}) => {

  return (
    <div className="photo-list">
        <div className="photo-list__item">
        <PhotoFavButton/>
        <img className="photo-list__image" src={element.urls.regular} alt="display image"></img>
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
