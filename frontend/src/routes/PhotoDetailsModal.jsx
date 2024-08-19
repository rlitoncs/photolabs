import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props);
  props.photo.map(photo => {
    console.log(photo.urls.full);
    console.log(photo.user.profile);
    console.log(photo.user.username);
    console.log(photo.location.city);
    console.log(photo.location.country);
  })

  return (
    <div className={"photo-details-modal"}>
      <button className="photo-details-modal__close-button" onClick={props.handleDisplayModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
