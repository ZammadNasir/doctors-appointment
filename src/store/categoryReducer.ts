import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "services/RequestHandler";

interface ItemsState {
  /* CATEGORY */

  all_category: any;
  all_category_data: any;
  get_category_by_id: any;

  /* SUB CATEGORY */

  all_sub_category: any;
  all_sub_category_data: any;
  get_sub_category_by_id: any;

  selected_subcategory: any;
  activity: boolean;
}

const initialState: ItemsState = {
  /* CATEGORY */

  all_category: [],
  all_category_data: [],
  get_category_by_id: {},

  /* SUB CATEGORY */

  all_sub_category: [],
  all_sub_category_data: [],
  get_sub_category_by_id: {},
  selected_subcategory: "all",
  activity: false,
};

/* CATEGORY */
export const all_categories = createAsyncThunk(
  "/category",
  async (data: any) => {
    try {
      let response = await apiServices.getFromApi(
        data.end_point,
        data.permission_name
      );
      return {
        ...response,
      };
    } catch (err) {
      console.log(err);
    }
  }
);

/* SUB CATEGORY */

export const all_sub_categories = createAsyncThunk(
  "/sub-category",
  async (data: any) => {
    try {
      let response = await apiServices.getFromApi(
        data.end_point,
        data.permission_name
      );
      return {
        ...response,
      };
    } catch (err) {
      console.log(err);
    }
  }
);

const category_slicer = createSlice({
  name: "category",
  initialState,
  reducers: {
    set_subcategory: (state, action: PayloadAction<any>) => {
      state.selected_subcategory = action?.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      /* CATEGORY */

      .addCase(all_categories.pending, (state, { payload }) => {
        state.activity = true;
      })

      .addCase(all_categories.fulfilled, (state, { payload }) => {
        state.all_category_data = payload?.data;
        state.activity = false;
      })

      /* SUB CATEGORY */

      .addCase(all_sub_categories.pending, (state, { payload }) => {
        state.activity = false;
      })

      .addCase(all_sub_categories.fulfilled, (state, { payload }) => {
        state.all_sub_category_data = payload?.data;
        state.activity = false;
      })
  },
});

export const { set_subcategory } = category_slicer.actions;

export default category_slicer.reducer;