import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  console.log(props);

  return (
    <div key={props.id} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg"  onClick={props.toggleFavourite}>
        <FavIcon selected={props.isFavourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;