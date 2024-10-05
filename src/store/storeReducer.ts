import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "services/RequestHandler";

interface storesInterface {
  all_stores: any;
  activity: boolean;
}

interface APIParams {
  end_point: string;
  body: any;
}

const initialState: storesInterface = {
  all_stores: [],
  activity: false,
};

export const get_all_stores = createAsyncThunk(
  "store",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "stores");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(get_all_stores.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_stores.fulfilled, (state: any, { payload }: any) => {
        state.all_stores = payload?.data;
        state.activity = false;
      });
  },
});

export default storeSlice.reducer;
