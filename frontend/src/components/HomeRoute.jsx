import React from 'react';
import { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [isFavourite, setIsFavourite] = useState([]);
  const handleClick = () => {
    setIsFavourite(prevClick => !prevClick)
  }
  
  return (
    <div className="home-route"> 
      <TopNavigationBar topics={props.topics}/>
      <PhotoList 
        photos={props.photos} 
        isFavourite={isFavourite} 
        toggleFavourite={handleClick}/>
    </div>
  );
}

export default HomeRoute;