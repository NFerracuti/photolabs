import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({modalState, setCloseModal, modalImage}) => {
  if (!modalState) return null;
  return (
    <div className="photo-details-modal">
      <div>
        <button onClick={setCloseModal} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol"/>
        </button>
      </div>
      <img className="photo-details-modal__image" 
      src={modalImage} 
      alt="display image"/>
    </div>
  )
};

export default PhotoDetailsModal;
