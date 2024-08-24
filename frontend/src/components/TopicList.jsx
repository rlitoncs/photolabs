import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map(topic => {
        return <TopicListItem key={topic.id} topic={topic} getPhotosByTopics={props.getPhotosByTopics} />
      })}
    </div>
  );
};

export default TopicList;
