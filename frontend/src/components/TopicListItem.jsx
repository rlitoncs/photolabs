import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <div>{props.topic.slug}</div>
    </div>
  );
};

export default TopicListItem;
