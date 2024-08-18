import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import {useState} from 'react';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = (photo_id) => {
    return favourites.includes(photo_id);
  }  

  const toggleFavourites = (photo_id) => {
    setFavourites(favourites.push(photo_id));
  }


  return (
    <div className="home-route"> 
      <TopNavigationBar topics={props.topics}/>
      <PhotoList 
        photos={props.photos}
        isFavourite={isFavourite}
        toggleFavourites={toggleFavourites}
      
      />
    </div>
  );
}

export default HomeRoute;