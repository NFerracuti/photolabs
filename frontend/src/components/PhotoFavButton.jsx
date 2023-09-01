import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({passPhotoId, id, like}) {

  return (
    <div onClick={() => passPhotoId(id)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className=".photo-list--fav-icon" selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;