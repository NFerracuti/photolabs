import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const[like, setLike] = useState(false);

  const switchLike = () => {
    setLike(!like)
  };

  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className=".photo-list--fav-icon" selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;