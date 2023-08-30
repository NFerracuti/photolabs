// frontend/src/App.jsx
import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

 const App = () => {

  const [favPhotos, setFavPhotos] = useState([]);

  const passPhotoId = (childData) => {

    if (favPhotos.includes(childData)) {
      const newFavPhotos = favPhotos.filter((element) => element !== childData)
      setFavPhotos(newFavPhotos);
      return false;
    } else {
      setFavPhotos((current) => [...current, childData]);
      return true;
    }
  };

  // to set the modal view
  const [modalState, setModalState] = useState(false);
  //to set the modal image
  const [modalImage, setModalImage] = useState(null);

  const setOpenModal = (imageDetails) => {
    setModalState(true);
    setModalImage(imageDetails);
  }

  const setCloseModal = () => setModalState(false);
  console.log("modalImage: ", modalImage);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setOpenModal={setOpenModal} passPhotoId={passPhotoId} favPhotos={favPhotos}/>
      <PhotoDetailsModal 
        modalState={modalState} 
        setCloseModal={setCloseModal} 
        modalImage={modalImage}
        photos={photos} 
        passPhotoId={passPhotoId} 
        setOpenModal={setOpenModal}/>
    </div>
  )
}

export default App;
