import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
  }),
});
