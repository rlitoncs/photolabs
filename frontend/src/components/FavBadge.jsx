import React from 'react';
import FavIcon from './FavIcon';
import DarkMode from './DarkMode';
import LightMode from './LightMode';
import '../styles/FavBadge.scss';
import '../App.scss';

const FavBadge = ({ isFavPhotoExist, setTheme, theme }) => {
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist}/>
      <span onClick={setTheme}>
        {!theme ? <DarkMode /> : <LightMode />}
      </span>
    </div>
  ) 
};

export default FavBadge;