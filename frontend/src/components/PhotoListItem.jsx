import React from "react";
import PhotoFavButton from './PhotoFavButton'
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        id={props.photo.id}
        isFavourite={props.isFavourite}
        toggleFavourites={props.toggleFavourites}
        />
      <img className="photo-list__image" src={props.photo.urls.regular} onClick={() => props.setPhotoSelected(props.photo)}></img>
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
