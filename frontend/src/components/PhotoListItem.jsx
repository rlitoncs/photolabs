import React from "react";
import PhotoFavButton from './PhotoFavButton'
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo, isFavourite, toggleFavourites, setPhotoSelected, theme}) => {

  return (
    <div className={`photo-list__item ${theme}`}>
      <PhotoFavButton 
        id={photo.id}
        isFavourite={isFavourite}
        toggleFavourites={toggleFavourites}
        />
      <img className="photo-list__image" src={photo.urls.regular} onClick={() => setPhotoSelected(photo)}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}></img>
        <div className="photo-list__user-info" >
          {photo.user.username}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
