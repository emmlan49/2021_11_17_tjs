import { combineReducers, createStore } from "redux";
import { REST_ADR, REST_RESSOURCE } from "../config/config.";

const INIT_ACTIONS = Object.freeze({
  INIT: "INIT",
  INIT_ARRAYS: "INIT_ARRAYS",
});

export const RESSOURCES_PUBLIC_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

const ressourceInitialState = {
  memes: [],
  images: [],
};

function ressourceReducer(state = ressourceInitialState, action) {
  // console.log("ressourceReducer", action);

  switch (action.type) {
    case INIT_ACTIONS.INIT:
      const pImages = fetch(`${REST_ADR}${REST_RESSOURCE.images}`).then((f) =>
        f.json()
      );

      const pMemes = fetch(`${REST_ADR}${REST_RESSOURCE.memes}`).then((f) =>
        f.json()
      );

      // à la fin des promesses, on relance le dispatch "INIT_ARRAYS"
      Promise.all([pImages, pMemes]).then((arr_arr) => {
        store.dispatch({ type: INIT_ACTIONS.INIT_ARRAYS, values: arr_arr });
      });

      return state;
    case INIT_ACTIONS.INIT_ARRAYS:
      return { ...state, images: action.values[0], memes: action.values[1] };
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
      return { ...state, images: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
      return { ...state, memes: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}

const currentInitialState = {
  titre: "",
  text: "",
  x: 0,
  y: 10,
  fontSize: 10,
  color: "#000000",
  fontWeight: "500",
  underline: false,
  italic: false,
  frameX: 0,
  frameY: 0,
  imageId: -1,
};

export const CURRENT_PUBLIC_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_CURRENT: "CLEAR_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT",
});

const currentReducer = (state = currentInitialState, action) => {
  //console.log("currentReducer", action);

  switch (action.type) {
    case INIT_ACTIONS.INIT:
      return state;
    case CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case CURRENT_PUBLIC_ACTIONS.CLEAR_CURRENT:
      return { ...state, ...currentInitialState };
    // case CURRENT_PUBLIC_ACTIONS.SAVE_CURRENT:
    // return { ...action.value };
    default:
      return state;
  }
};

/**
 * Store combiné
 */
const store = createStore(
  combineReducers({
    current: currentReducer,
    ressources: ressourceReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  //console.log("store", store.getState());
});

// initialisation du store
store.dispatch({
  type: INIT_ACTIONS.INIT,
});

export default store;
