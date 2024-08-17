import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavourite, setisFavourite] = useState(false);

  const handleClick = () => {
    setisFavourite(prevClick => !prevClick)
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg"  onClick={handleClick}>
        {/* Insert React */}
        <FavIcon selected={isFavourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;