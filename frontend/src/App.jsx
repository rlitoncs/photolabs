import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />) } */}
      <HomeRoute/>
    </div>
  );
};

export default App;
