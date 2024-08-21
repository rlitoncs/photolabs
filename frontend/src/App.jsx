import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  //Returns true or false if current photo is favourited in the array
  const isFavourite = (photo_id) => {
    return state.favourites.includes(photo_id);
  }  

  // Adds a notification at topNavBar if there is at least 1 favourite photo
  const isFavPhotoExist = state.favourites.length > 0;
  
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute 
      photos={state.photoData} 
      topics={state.topicData}
      isFavourite={isFavourite}
      toggleFavourites={updateToFavPhotoIds}
      isFavPhotoExist={isFavPhotoExist}
      setPhotoSelected={setPhotoSelected}
      />
      
      
      {state.displayModal && 
        <PhotoDetailsModal 
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photo={state.selectPhoto}
          isFavourite={isFavourite}
          toggleFavourites={updateToFavPhotoIds}
        />
      }
    </div>
  );
};

export default App;
