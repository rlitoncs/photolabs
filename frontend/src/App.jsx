import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  
  const {
    state: {favourites, photoData, topicData, selectPhoto, displayModal, theme},
    getPhotosByNavBar,
    getPhotosByTopics,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photoRef,
    setTheme
  } = useApplicationData();

  //Check whether selected photo is favourited
  const isFavourite = (photo_id) => {
    return favourites.includes(photo_id);
  }  

  // Check if any photo has been favourited
  const isFavPhotoExist = favourites.length > 0;
  
  return (
    <div className={`App-${theme}`}>
      <HomeRoute 
      photos={photoData} 
      topics={topicData}
      isFavourite={isFavourite}
      isFavPhotoExist={isFavPhotoExist}
      toggleFavourites={updateToFavPhotoIds}
      getPhotosByTopics={getPhotosByTopics}
      getPhotosByNavBar={getPhotosByNavBar}
      setPhotoSelected={setPhotoSelected}
      setTheme={setTheme}
      theme={theme}
      />
      
      {displayModal && 
        <PhotoDetailsModal
          photo={selectPhoto}
          isFavourite={isFavourite}
          toggleFavourites={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          ref={photoRef}
          theme={theme}
        />
      }
    </div>
  );
};

export default App;
