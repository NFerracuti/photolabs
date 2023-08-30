import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ selected, favLength }) => {
  let favPhotoIndicator = favLength > 0;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!favPhotoIndicator} selected={true}/>
      {favLength}
    </div>
  ) 
};

export default FavBadge;