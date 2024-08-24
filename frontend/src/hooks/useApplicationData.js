import { useReducer, useEffect, useRef } from "react";

//GLOBAL====================================================================
const INITIAL_STATE = {
  favourites: [],
  photoData: [],
  topicData: [],
  selectPhoto: {},
  topicState: null,
  navBarLogo: true,
  displayModal: false
}

export const ACTIONS = {
  SET_NAV_BAR: 'SET_NAV_BAR',
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_STATE: 'SET_TOPIC_STATE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
}

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.SET_NAV_BAR:
      return {...state, navBarLogo: action.payload};

    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favourites:[...state.favourites, action.payload]}

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favourites: state.favourites.filter(id => id !== action.payload)};

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}
    
    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload}
    
    case ACTIONS.SET_TOPIC_STATE:
      return {...state, topicState: action.payload};

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
  //STATE MANAGEMENT====================================================================
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const photoRef = useRef(null);

  //SIDE EFFECTS========================================================================
  
  // Retrieve main photos for home page
  useEffect(() => {
    if (state.navBarLogo){
      fetch('/api/photos')
        .then(response => response.json())
        .then(data => {
          dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data});
          dispatch({type: ACTIONS.SET_TOPIC_STATE, payload: null})
        });
    }
  }, [state.navBarLogo]);

  // Retrieve topics data once
  useEffect(() => {
    fetch('/api/topics')
    .then(response => response.json())
    .then(data => {
      dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
    })
  }, [])

  // Retrieve photos for selected topic
  useEffect(() => {
    const topic_id = state.topicState;
    if (topic_id) {
      fetch(`/api/topics/photos/${topic_id}`)
        .then(response => response.json())
        .then(data => {
          dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
          dispatch({type: ACTIONS.SET_NAV_BAR, payload: false})
        })
    }

  }, [state.topicState])

  // Jump to selected photo when clicked
  useEffect(() => {
    if (photoRef.current){
      photoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.selectPhoto])


  //EVENT HANDLERS====================================================================

  // Update nav logo state when selected
  const getPhotosByNavBar = () => {
    dispatch({type: ACTIONS.SET_NAV_BAR, payload: true});
  }

  // Update topic state when selected
  const getPhotosByTopics = (topic_id) => {
    dispatch({type: ACTIONS.SET_TOPIC_STATE, payload: topic_id});
  }

  // Adds or removes photo from favourites array when user favourites a photo
  const updateToFavPhotoIds = (photo_id) => {
    state.favourites.includes(photo_id) ? 
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo_id}) 
    :
    dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photo_id});
  }
  
  // Update selectPhoto state when user selects photo
  const setPhotoSelected = (photo_object) => {

    // Re-populates the selected photo with similar photos when user selects a similar photo in the modal
    if (!photo_object.similar_photos){
      const select_photo_object = state.photoData.find(photo => photo.id === photo_object.id)
      dispatch({type: ACTIONS.SELECT_PHOTO, payload: select_photo_object})
    } else {
      // no need to re-populate similar photos, as photoData already includes it
      dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo_object})
    }
  }

  // Update state when user clicks the close button on modal
  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO})
  }
  
  //JSX ===========================================================================

  return {
    state,
    getPhotosByNavBar,
    getPhotosByTopics,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photoRef
  }
}

export default useApplicationData;