import { createStore } from "redux";
import mainReducer from "./reducers/index.js";

export const initialState = {
  user: {
    firstName: "",
    cities: [],
  },
};

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
