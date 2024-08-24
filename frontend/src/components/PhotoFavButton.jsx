import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({id, isFavourite, toggleFavourites}) {
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg"  onClick={() => toggleFavourites(id)}>
        <FavIcon selected={isFavourite(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;