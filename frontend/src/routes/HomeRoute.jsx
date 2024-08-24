import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route"> 
      <TopNavigationBar 
        topics={props.topics}
        isFavPhotoExist={props.isFavPhotoExist}
        getPhotosByTopics={props.getPhotosByTopics}
        getPhotosByNavBar={props.getPhotosByNavBar}
        />
      <PhotoList 
        photos={props.photos}
        isFavourite={props.isFavourite}
        toggleFavourites={props.toggleFavourites}
        setPhotoSelected={props.setPhotoSelected}
      />
    </div>
  );
}

export default HomeRoute;