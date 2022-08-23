import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchService from "../../services/fetchService";
import { adaptCharactersResponse } from "./adapter";
const initialState = {
  charactersData: {},
  loading: false,
};

export const fetchCharactersData = createAsyncThunk(
  "characters/fetchData",
  async (params) => {
    const response = await fetchService.get({
      endPoint: "https://swapi.dev/api/people",
      params,
    });

    const adaptedData = adaptCharactersResponse(response.data);

    return adaptedData;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharactersData.fulfilled, (state, action) => {
        state.loading = false;
        state.charactersData = action.payload;
      })
      .addCase(fetchCharactersData.rejected, (state, action) => {
        state.loading = false;
        state.charactersData = {};
      });
  },
});

export const selectCharactersData = (state) => {
  return state.characters.charactersData;
};
export const selectCharactersLoading = (state) => state.characters.loading;

export default charactersSlice.reducer;
