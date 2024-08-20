import { useState, useReducer } from "react";

const INITIAL_STATE = {
  favourites: [],
  displayModal: false,
  selectPhoto: {}
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favourites:[...state.favourites, action.payload]}

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favourites: state.favourites.filter(id => id !== action.payload)};

    case ACTIONS.SELECT_PHOTO:
      return {...state, displayModal: true, selectPhoto: action.payload}

    case ACTIONS.CLOSE_PHOTO:
      return {...state, displayModal: false}

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
}

const useApplicationData = () => { 
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //Adds or removes photo from array when user clicks on favourite
  const updateToFavPhotoIds = (photo_id) => {
    state.favourites.includes(photo_id) ? 
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo_id}) 
    :
    dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photo_id});
  }
  
  // Setting state when user clicks on photo
  const setPhotoSelected = (photo_object) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo_object})
  }

  //Setting state when user clicks on the close button on modal
  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO})
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;