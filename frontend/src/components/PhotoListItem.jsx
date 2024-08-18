import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton'

const PhotoListItem = (props) => {
  return (
    
    <div key={props.photo.id} className="photo-list__item">
      <PhotoFavButton 
        id={props.photo.id} 
        isFavourite={props.isFavourite}
        toggleFavourite={props.toggleFavourite}/>
      <img className="photo-list__image" src={props.photo.urls.regular}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
        <div className="photo-list__user-info" >
          {props.photo.user.username}
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
