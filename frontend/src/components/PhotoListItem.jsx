import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile}></img>
        <div className="photo-list__user-info" >{props.photo.username}</div>
        <div className="photo-list__user-location">{props.photo.location.city} {props.photo.location.country}</div>
      </div>
    </div>
  );

};

export default PhotoListItem;
