import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import {useState} from 'react';

const HomeRoute = (props) => {

  return (
    <div className="home-route"> 
      <TopNavigationBar 
        topics={props.topics}
        isFavPhotoExist={props.isFavPhotoExist}
        />
      <PhotoList 
        photos={props.photos}
        isFavourite={props.isFavourite}
        toggleFavourites={props.toggleFavourites}
        handleDisplayModal={props.handleDisplayModal}
      />
    </div>
  );
}

export default HomeRoute;