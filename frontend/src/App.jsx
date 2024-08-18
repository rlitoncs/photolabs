import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
