import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({modalState, setCloseModal, modalImage, photos, passPhotoId, setOpenModal}) => {

  console.log("modalImage: ", modalImage);
  if (!modalState) return null;
  return (
    <div className="photo-details-modal">
      <div>
        <button onClick={setCloseModal} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol"/>
        </button>
      </div>
      <img className="photo-details-modal__image" 
      src={modalImage.urls.full} 
      alt="display image"/>
      <div className="photo-details-modal__images">
        Photographer: {modalImage.user.name}
        <br></br>
        <br></br>
        Similar Images
        <PhotoList 
        photos={photos} 
        passPhotoId={passPhotoId} 
        setOpenModal={setOpenModal}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
