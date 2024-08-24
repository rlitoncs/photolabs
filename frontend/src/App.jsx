import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  
  const {
    state: {favourites, photoData, topicData, selectPhoto, displayModal},
    getPhotosByNavBar,
    getPhotosByTopics,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  //Check whether selected photo is favourited
  const isFavourite = (photo_id) => {
    return favourites.includes(photo_id);
  }  

  // Check if any photo has been favourited
  const isFavPhotoExist = favourites.length > 0;
  
  return (
    <div className="App">
      <HomeRoute 
      photos={photoData} 
      topics={topicData}
      isFavourite={isFavourite}
      isFavPhotoExist={isFavPhotoExist}
      toggleFavourites={updateToFavPhotoIds}
      getPhotosByTopics={getPhotosByTopics}
      getPhotosByNavBar={getPhotosByNavBar}
      setPhotoSelected={setPhotoSelected}
      />
      
      {displayModal && 
        <PhotoDetailsModal
          photo={selectPhoto}
          isFavourite={isFavourite}
          toggleFavourites={updateToFavPhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      }
    </div>
  );
};

export default App;
