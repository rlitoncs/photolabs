import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState({});

  const handleDisplayModal = (photoObj) => {
    setDisplayModal(prev => !prev);
    setDisplayPhoto({...photoObj})
  }

  
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute photos={photos} topics={topics} handleDisplayModal={handleDisplayModal}/>
      {!!displayModal && 
      <PhotoDetailsModal 
        handleDisplayModal={handleDisplayModal}
        />
      }
    </div>
  );
};

export default App;
