import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  user: {
    firstName: "",
    cities: [],
  },
};

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
