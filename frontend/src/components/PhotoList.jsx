import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, isFavourite, toggleFavourites, setPhotoSelected}) => {

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return <PhotoListItem 
                key={photo.id} 
                photo={photo} 
                isFavourite={isFavourite}
                toggleFavourites={toggleFavourites}
                setPhotoSelected={setPhotoSelected}
                />
      })}
    </ul>
  );
};

export default PhotoList;
