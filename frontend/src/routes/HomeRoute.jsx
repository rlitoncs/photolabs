import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import {useState} from 'react';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);
  console.log(favourites);
  const isFavourite = (photo_id) => {
    return favourites.includes(photo_id);
  }  

  const toggleFavourites = (photo_id) => {
    if (favourites.includes(photo_id)) {
      setFavourites(favourites.filter(id => id !== photo_id));
    } else {
      setFavourites([...favourites, photo_id]);
    }
  }
  
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="home-route"> 
      <TopNavigationBar 
        topics={props.topics}
        isFavPhotoExist={isFavPhotoExist}
        />
      <PhotoList 
        photos={props.photos}
        isFavourite={isFavourite}
        toggleFavourites={toggleFavourites}
      />
    </div>
  );
}

export default HomeRoute;