import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({modalState, setCloseModal, modalImage}) => {
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
      {/* <div>
        <PhotoList 
        photos={modalImage} 
        passPhotoId={null} 
        setOpenModal={null}/>
      </div> */}
    </div>
  )
};

export default PhotoDetailsModal;
