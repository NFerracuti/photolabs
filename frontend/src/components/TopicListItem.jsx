import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, fetchPhotosByTopic, id}) => {
  return (
    <div onClick={() => fetchPhotosByTopic(id)} className="topic-list__item">
      <span>{topic}</span>
    </div>
  );
};

export default TopicListItem;
