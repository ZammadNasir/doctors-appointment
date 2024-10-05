import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "services/RequestHandler";

interface productsInterface {
  all_offers_data: any;
  single_offers_data: any;
  activity: boolean;
}

interface APIParams {
  end_point: string;
  body: any;
}

const initialState: productsInterface = {
  all_offers_data: [],
  single_offers_data: {},
  activity: false,
};

export const get_all_offers = createAsyncThunk(
  "all/offers",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(data.end_point, data.body, "offers");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_single_offers = createAsyncThunk(
  "single/offers",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "offers");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    clear_offer_data: (state: any) => {
      state.single_offers_data = {} as any;
    }
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(get_all_offers.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_offers.fulfilled, (state: any, { payload }: any) => {
        state.all_offers_data = payload?.data;
        state.activity = false;
      })

      .addCase(get_single_offers.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_single_offers.fulfilled, (state: any, { payload }: any) => {
        state.single_offers_data = payload?.data;
        state.activity = false;
      });

  },
});

export default productSlice.reducer;


export const {
  clear_offer_data
} = productSlice.actions;
