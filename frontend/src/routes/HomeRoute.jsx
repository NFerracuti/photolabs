import React from 'react';

 // import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';

 const HomeRoute = ({photos, topics, setOpenModal, passPhotoId, favPhotos, element, fetchPhotosByTopic}) => {

  let favLength = favPhotos.length || null;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} 
      favLength={favLength}
      fetchPhotosByTopic={fetchPhotosByTopic}/>
      <PhotoList 
      element={element}
      photos={photos} 
      passPhotoId={passPhotoId} 
      setOpenModal={setOpenModal}
      favPhotos={favPhotos}/>
    </div>
  )
}

export default HomeRoute;
