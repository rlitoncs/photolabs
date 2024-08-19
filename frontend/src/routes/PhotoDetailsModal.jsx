import React, { useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = (props) => {
  const similarPhotos = props.photo.similar_photos;
  const similarPhotosArr = Object.keys(similarPhotos).map(key => {
    return similarPhotos[key]
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.handleDisplayModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <PhotoFavButton 
        id={props.photo.id} 
        isFavourite={props.isFavourite} 
        toggleFavourites={props.toggleFavourites}/>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image"> 
          <img src={props.photo.urls.full} />
        </div>

        <div className="photo-details-modal__photographer-details" >
          <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
          <div className="photo-list__user-info" >
            <span>{props.photo.user.username}</span>
            <div className="photo-list__user-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </div>
        </div>
      
        <div className="photo-details-modal__header">Similar Photos</div>
      </div>

      <div className="photo-details-modal__top-bar">
        <PhotoList 
          isFavourite={props.isFavourite} 
          toggleFavourites={props.toggleFavourites} 
          photos={similarPhotosArr}/>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
