import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchService from "../../services/fetchService";
import {
  adaptCharacterMainData,
  characterAdditionalInfoAdapter,
} from "./adapter";
const initialState = {
  mainData: {},
  loading: false,
  filmsLoading: false,
  films: [],
};
export const fetchCharacterMainData = createAsyncThunk(
  "characterInfo/fetchData",
  async (id, thunkApi) => {
    const response = await fetchService.get({
      endPoint: `https://swapi.dev/api/people/${id}`,
    });
    if (response.data.films) {
      thunkApi.dispatch(
        fetchCharacterAdditionalInfo({
          type: "films",
          requestLinks: response.data.films,
        })
      );
    }
    const adaptedData = adaptCharacterMainData(response.data);

    return adaptedData;
  }
);

export const fetchCharacterAdditionalInfo = createAsyncThunk(
  "characterInfo/fetchAdditionalData",
  async ({ requestLinks, type }, thunkApi) => {
    return Promise.all(
      requestLinks.map((link) =>
        fetchService.get({
          endPoint: link,
        })
      )
    )
      .then((values) => {
        const adaptedData = characterAdditionalInfoAdapter[type](values);
        return adaptedData;
      })
      .catch(() => {
        return thunkApi.rejectWithValue({ type });
      });
  }
);
export const characterInfoSlice = createSlice({
  name: "characterInfo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterMainData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacterMainData.fulfilled, (state, action) => {
        state.loading = false;
        state.mainData = action.payload;
      })
      .addCase(fetchCharacterMainData.rejected, (state, action) => {
        state.loading = false;
        state.mainData = {};
      })
      .addCase(fetchCharacterAdditionalInfo.pending, (state, action) => {
        const type = action.meta.arg.type;
        state[`${type}Loading`] = true;
      })
      .addCase(fetchCharacterAdditionalInfo.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        state[`${type}Loading`] = false;
        state[type] = data;
      })
      .addCase(fetchCharacterAdditionalInfo.rejected, (state, action) => {
        const { type } = action.payload;
        state[`${type}Loading`] = false;
        state[type] = {};
      });
  },
});

export const selectCharacterMainData = (state) => {
  return state.characterInfo.mainData;
};
export const selectCharacterInfoLoading = (state) => {
  return state.characterInfo.loading;
};

export const selectAdditionalInfo = (type) => {
  return (state) => {
    return state.characterInfo[type];
  };
};
export const selectAdditionalInfoLoading = (type) => {
  return (state) => {
    return state.characterInfo[`${type}Loading`];
  };
};
export default characterInfoSlice.reducer;
