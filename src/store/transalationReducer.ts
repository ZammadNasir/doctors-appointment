import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  getStringFromLocalStorage,
} from "utils/localStore";
const token = getStringFromLocalStorage("token");
const user = getDataFromLocalStorage("user");

interface language_state {
  language: string;
}

const initialState: language_state = {
  // language: token && user?.language ? user?.language : "en",
  language: "en"
};

const language_slicer = createSlice({
  name: "language",
  initialState,
  reducers: {
    set_language: (state: language_state, action: PayloadAction<any>) => {
      state.language = action.payload;
    },
  },
});

export const { set_language } = language_slicer.actions;

export const lng = initialState.language

export default language_slicer.reducer;
