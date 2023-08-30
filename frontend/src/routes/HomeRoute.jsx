import React from 'react';

 // import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';

 const HomeRoute = ({photos, topics}) => {
  const favPhotos = [];
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  )
}

export default HomeRoute;
