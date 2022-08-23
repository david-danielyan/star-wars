import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterInfoSlice from "../Pages/CharacterInfo/characterInfoSlice";
import charactersReducer from "../Pages/Characters/charactersSlice";

export const store = configureStore({
  reducer: combineReducers({
    characters: charactersReducer,
    characterInfo: characterInfoSlice,
  }),
});
