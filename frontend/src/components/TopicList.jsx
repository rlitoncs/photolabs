import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics, getPhotosByTopics}) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return <TopicListItem key={topic.id} topic={topic} getPhotosByTopics={getPhotosByTopics} />
      })}
    </div>
  );
};

export default TopicList;
