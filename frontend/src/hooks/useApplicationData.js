import { useReducer, useEffect } from "react";

const ACTIONS = {
  SET_FAV_PHOTOS: 'SET_FAV_PHOTOS',
  SET_MODAL_STATE: 'SET_MODAL_STATE',
  SET_MODAL_IMAGE: 'SET_MODAL_IMAGE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
  SET_SIMILAR_PHOTOS: 'SET_SIMILAR_PHOTOS'
};

const initialState = {
  favPhotos: [],
  modalState: false,
  modalImage: null,
  photoData: [],
  topicData: [],
  similarPhotos: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_FAV_PHOTOS:
      return {...state, favPhotos: action.payload};
    case ACTIONS.SET_MODAL_STATE:
      return {...state, modalState: action.payload};
    case ACTIONS.SET_MODAL_IMAGE:
      return {...state, modalImage: action.payload};
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload};
    case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload};
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
        return {...state, photoData: action.payload};
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(photoData => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }); 
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(topicData => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }); 
      });
  }, []);

  const passPhotoId = (childData) => {
    let newFavPhotos;
    if (state.favPhotos.includes(childData)) {
      newFavPhotos = state.favPhotos.filter((element) => element !== childData);
      dispatch({ type: 'SET_FAV_PHOTOS', payload: newFavPhotos });
      return false;
    } else {
      newFavPhotos = [...state.favPhotos, childData];
      dispatch({ type: 'SET_FAV_PHOTOS', payload: newFavPhotos });
      return true;
    }
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data });
      });
  };


  const setOpenModal = (imageDetails) => {
    dispatch({ type: 'SET_MODAL_STATE', payload: true });
    dispatch({ type: 'SET_MODAL_IMAGE', payload: imageDetails });
  };

  const setCloseModal = () => dispatch({ type: 'SET_MODAL_STATE', payload: false });

  return {
    favPhotos: state.favPhotos,
    modalState: state.modalState,
    modalImage: state.modalImage,
    passPhotoId,
    setOpenModal,
    setCloseModal,
    photoData: state.photoData,
    topicData: state.topicData,
    fetchPhotosByTopic,
  };
}