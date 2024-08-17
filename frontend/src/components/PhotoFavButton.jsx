import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log(click);
    return !click ? setClick(true) : setClick(false);
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg"  onClick={handleClick}>
        {/* Insert React */}
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;