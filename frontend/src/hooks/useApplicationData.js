import { useState } from "react";

const useApplicationData = () => { 
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState({});

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


  return {
    state: {favourites, displayModal, displayPhoto}, 
    toggleFavourites,
    isFavourite,
    isFavPhotoExist,
    handleDisplayModal
  }
}

export default useApplicationData;