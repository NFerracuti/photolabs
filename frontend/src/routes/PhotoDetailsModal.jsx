import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({modalState, setCloseModal, modalImage, photos, passPhotoId, setOpenModal, favPhotos}) => {

  if (!modalState) return null;
  let like = favPhotos.includes(modalImage.id)

  return (
    <div className="photo-details-modal">
        <button onClick={setCloseModal} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol"/>
        </button>
      <div>
        <div className="photo-list__item-modal">
        <PhotoFavButton 
        passPhotoId={passPhotoId} 
        id={modalImage.id}
        like={like}/>
        <img className="photo-details-modal__image" 
        src={modalImage.urls.full} 
        alt="display image"/>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={modalImage.user.profile} alt="profile image"></img>
          <div className="photo-list__user-info">
            {modalImage.user.username}
            <div className="photo-list__user-location">
              {`${modalImage.location.city}, ${modalImage.location.country}`}
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="photo-details-modal__images">
        Similar Images
        <PhotoList 
        favPhotos={favPhotos}
        photos={photos} 
        passPhotoId={passPhotoId} 
        setOpenModal={setOpenModal}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
