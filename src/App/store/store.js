import { createStore } from "redux";

export const ressourceInitialState = {
  memes: [],
  images: [],
};

export const RESSOURCE_PUBLIC_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

function ressourceReducer(state = ressourceInitialState, action) {
  console.log(action);

  switch (action.type) {
    case RESSOURCE_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
      return { ...state, images: action.values };
    case RESSOURCE_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
      return { ...state, memes: action.values };
    case RESSOURCE_PUBLIC_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}

const store = createStore(ressourceReducer);
store.subscribe(() => {
  console.log("store", store.getState());
});

store.dispatch({
  type: RESSOURCE_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST,
  values: [{ id: 0 }, { d: 1 }],
});

store.dispatch({
  type: RESSOURCE_PUBLIC_ACTIONS.REPLACE_MEMES_LIST,
  values: [{ id: 0 }, { d: 2 }],
});

store.dispatch({
  type: RESSOURCE_PUBLIC_ACTIONS.ADD_MEME,
  value: { id: 10 },
});

export default store;
