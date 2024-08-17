import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  return (
    <div>
      <img src={`${props.imageSource}`}></img>
      <img src={`${props.profile}`}></img>
      <div>{props.username}</div>
      <div>{props.location.city} {props.location.country}</div>
    </div>
  );

};

export default PhotoListItem;
