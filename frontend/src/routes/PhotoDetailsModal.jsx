import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.handleDisplayModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <div className="photo-details-modal__image"> 
        <img src={props.photo.urls.full} />
      </div>

      <div className="photo-details-modal__header"> 
        <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
        <div className="photo-list__user-info" >
          {props.photo.user.username}
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
