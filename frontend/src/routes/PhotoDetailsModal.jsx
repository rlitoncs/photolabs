import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import { forwardRef } from 'react';

const PhotoDetailsModal = forwardRef(({photo, isFavourite, toggleFavourites, setPhotoSelected, onClosePhotoDetailsModal}, ref) => {

  const similarPhotos = photo.similar_photos;
  return (
    // Modal Container
    <div className="photo-details-modal">

      {/* Close Button */}
      <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      {/* Images Container */}
      <div className="photo-details-modal__images">

        {/* Favourite Button */}
        <PhotoFavButton 
          id={photo.id} 
          isFavourite={isFavourite} 
          toggleFavourites={toggleFavourites}/>

        {/* Image Selected in Modal*/}
        <img ref={ref} className="photo-details-modal__image" 
          src={photo.urls.full} 
        />
        
        {/* Photographer Details Container */}
        <div className="photo-details-modal__photographer-details" >
          <div className="photo-list__user-details">
            <img 
              className="photo-list__user-profile" 
              src={photo.user.profile}>
            </img>
            <div className="photo-list__user-info" >
              <span>{photo.user.username}</span>
              <div className="photo-list__user-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Photo Header */}
        <div className="photo-details-modal__header">
          <strong>Similar Photos</strong>
        </div>
      </div>

      <div className="photo-details-modal__top-bar">
        <PhotoList 
          isFavourite={isFavourite} 
          toggleFavourites={toggleFavourites} 
          setPhotoSelected={setPhotoSelected}
          photos={similarPhotos}
          />
      </div>

    </div>
  )
});

export default PhotoDetailsModal;
