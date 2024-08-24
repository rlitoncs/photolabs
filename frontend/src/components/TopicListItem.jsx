import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, getPhotosByTopics}) => {
  
  return (
    <div className="topic-list__item">
      <div onClick={() => getPhotosByTopics(topic.id)}>{topic.title}</div>
    </div>
  );
};

export default TopicListItem;
