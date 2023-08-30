import React, { useState } from 'react';

 // import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';

 const HomeRoute = ({photos, topics, setOpenModal, passPhotoId, favPhotos}) => {

  
  let favLength = favPhotos.length || null;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favLength={favLength}/>
      <PhotoList 
      photos={photos} 
      passPhotoId={passPhotoId} 
      setOpenModal={setOpenModal}/>
    </div>
  )
}

export default HomeRoute;
