import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

// reducer: rootReducer,
// composeWithDevTools(applyMiddleware(...middleware)),

const store = configureStore({
  reducer: rootReducer
});

export default store;