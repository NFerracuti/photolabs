// frontend/src/App.jsx
import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

 const App = () => {
  const {
    favPhotos,
    modalState,
    modalImage,
    passPhotoId,
    setOpenModal,
    setCloseModal,
    photoData,
    topicData,
    fetchPhotosByTopic,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
      photos={photoData} 
      topics={topicData} 
      setOpenModal={setOpenModal} 
      passPhotoId={passPhotoId} 
      favPhotos={favPhotos}
      fetchPhotosByTopic={fetchPhotosByTopic}
      />
    <PhotoDetailsModal 
      modalState={modalState} 
      setCloseModal={setCloseModal} 
      modalImage={modalImage}
      photos={photoData} 
      passPhotoId={passPhotoId} 
      setOpenModal={setOpenModal}
      favPhotos={favPhotos}/>
    </div>
  )
}

export default App;
