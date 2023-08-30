import React, { useState } from 'react';

 // import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';

 const HomeRoute = ({photos, topics, setOpenModal}) => {
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
