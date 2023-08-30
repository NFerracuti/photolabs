import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favLength}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__side">
        <TopicList topics={topics}/>
        <FavBadge favLength={favLength}/>
      </div>
    </div>
  )
}

export default TopNavigation;