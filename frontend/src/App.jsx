import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleFavourites,
    isFavourite,
    isFavPhotoExist,
    handleDisplayModal
  } = useApplicationData();


  
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute 
      photos={photos} 
      topics={topics}
      isFavourite={isFavourite}
      toggleFavourites={toggleFavourites}
      isFavPhotoExist={isFavPhotoExist}
      handleDisplayModal={handleDisplayModal}
      />
      
      
      {!!state.displayModal && 
        <PhotoDetailsModal 
          handleDisplayModal={handleDisplayModal}
          photo={displayPhoto}
          isFavourite={isFavourite}
          toggleFavourites={toggleFavourites}
        />
      }
    </div>
  );
};

export default App;
