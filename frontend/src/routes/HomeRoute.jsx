import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics, isFavourite, isFavPhotoExist, toggleFavourites, getPhotosByTopics, getPhotosByNavBar, setPhotoSelected}) => {

  return (
    <div className="home-route"> 
      <TopNavigationBar 
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        getPhotosByTopics={getPhotosByTopics}
        getPhotosByNavBar={getPhotosByNavBar}
        />
      <PhotoList 
        photos={photos}
        isFavourite={isFavourite}
        toggleFavourites={toggleFavourites}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
}

export default HomeRoute;