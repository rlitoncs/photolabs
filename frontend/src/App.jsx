import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  
  const {
    state,
    getPhotosByNavBar,
    getPhotosByTopics,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  //Check whether selected photo is favourited
  const isFavourite = (photo_id) => {
    return state.favourites.includes(photo_id);
  }  

  // Check if any photo has been favourited
  const isFavPhotoExist = state.favourites.length > 0;
  
  return (
    <div className="App">
      <HomeRoute 
      photos={state.photoData} 
      topics={state.topicData}
      isFavourite={isFavourite}
      toggleFavourites={updateToFavPhotoIds}
      isFavPhotoExist={isFavPhotoExist}
      setPhotoSelected={setPhotoSelected}
      getPhotosByTopics={getPhotosByTopics}
      getPhotosByNavBar={getPhotosByNavBar}
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
