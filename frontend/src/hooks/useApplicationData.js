import { useState, useReducer } from "react";
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return { /* insert logic */ }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
}

const useApplicationData = () => { 
  const [state, dispatch] = useReducer(reducer, 0);










  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState({});

  //Adds or removes photo from array when user clicks on favourite
  const updateToFavPhotoIds = (photo_id) => {
    if (favourites.includes(photo_id)) {
      setFavourites(favourites.filter(id => id !== photo_id));
    } else {
      setFavourites([...favourites, photo_id]);
    }
  }

  // Setting state when user clicks on photo
  const setPhotoSelected = (photo_object) => {
    setDisplayPhoto({...photo_object})
    setDisplayModal(prev => !prev);
  }

  //Setting state when user clicks on the close button on modal
  const onClosePhotoDetailsModal = () => {
    setDisplayModal(prev => !prev);
  }


  return {
    state: {favourites, displayModal, displayPhoto}, 
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;