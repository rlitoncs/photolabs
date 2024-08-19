import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map(photo => {
        return <PhotoListItem 
                key={photo.id} 
                photo={photo} 
                isFavourite={props.isFavourite}
                toggleFavourites={props.toggleFavourites}
                handleDisplayModal={props.handleDisplayModal}
                />
      })}
    </ul>
  );
};

export default PhotoList;
