import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import {useState} from 'react';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);

  //Returns true or false if current photo is favourited in the array
  const isFavourite = (photo_id) => {
    return favourites.includes(photo_id);
  }  

  //Adds or removes photo from array when user clicks on favourite
  const toggleFavourites = (photo_id) => {
    if (favourites.includes(photo_id)) {
      setFavourites(favourites.filter(id => id !== photo_id));
    } else {
      setFavourites([...favourites, photo_id]);
    }
  }

  // Adds a notification at topNavBar if there is at least 1 favourite photo
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
        handleDisplayModal={props.handleDisplayModal}
      />
    </div>
  );
}

export default HomeRoute;