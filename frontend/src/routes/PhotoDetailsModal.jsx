import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const [isClosed, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  }


  return (
    <div className={!isClosed ? "photo-details-modal" : ""}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleClose}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
