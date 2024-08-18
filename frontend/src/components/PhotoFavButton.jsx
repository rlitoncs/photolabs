import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div key={props.id} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg"  onClick={() => props.toggleFavourite(props.id)}>
        <FavIcon selected={isFavourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;