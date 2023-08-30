import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from './FavBadge';

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((element) => (
        <TopicListItem key={element.id} topic={element.title}/>
        
      ))}
    </div>
  );
};

export default TopicList;
