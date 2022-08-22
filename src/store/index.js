import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../Pages/Characters/charactersSlice";

export const store = configureStore({
  reducer: combineReducers({
    characters: charactersReducer,
  }),
});
