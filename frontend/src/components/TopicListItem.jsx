import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  return (
    <div className="topic-list__item">
      <div onClick={() => props.getPhotosByTopics(props.topic.id)}>{props.topic.title}</div>
    </div>
  );
};

export default TopicListItem;
