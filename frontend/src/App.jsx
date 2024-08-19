import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState({}); // state not being shared

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
  
  const handleDisplayModal = (photoObj) => {
    setDisplayModal(prev => !prev);
    setDisplayPhoto({...photoObj})
  }


  
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
      
      
      {!!displayModal && 
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
