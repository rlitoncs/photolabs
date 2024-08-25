import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, isFavourite, toggleFavourites, setPhotoSelected, theme}) => {

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return <PhotoListItem 
                key={photo.id} 
                photo={photo} 
                isFavourite={isFavourite}
                toggleFavourites={toggleFavourites}
                setPhotoSelected={setPhotoSelected}
                theme={theme}
                />
      })}
    </ul>
  );
};

export default PhotoList;
