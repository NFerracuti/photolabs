import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((element) => (
        <TopicListItem key={element.id} topic={element.title} 
        fetchPhotosByTopic={fetchPhotosByTopic}
        id={element.id}/>
      ))}
    </div>
  );
};

export default TopicList;