import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal(prev => !prev);
  }
  
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute photos={photos} topics={topics} handleDisplayModal={handleDisplayModal}/>
      {!!displayModal && 
      <PhotoDetailsModal 
        handleDisplayModal={handleDisplayModal}
        photo={photos}
        />
      }
    </div>
  );
};

export default App;
