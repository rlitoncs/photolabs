import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map(photo => {
        return <PhotoListItem 
                key={photo.id} 
                photo={photo} 
                isFavourite={props.isFavourite}
                toggleFavourites={props.toggleFavourites}
                setPhotoSelected={props.setPhotoSelected}
                />
      })}
    </ul>
  );
};

export default PhotoList;
