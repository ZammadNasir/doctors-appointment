import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiServices from "services/RequestHandler";

interface OrderState {
  payment_method: string;
  card: any;
  exact_amount: Boolean;
  bring_the_change_amount: number | string | null;
  shipping_time: string | null;
  store_note: string;
  bank: string;
  place_order: any;
  delivery_time: any;
  order_id: number | null;
  order_history: any;
  order_count: any;
  single_order: any;
  payment_status: any;
  item_price: any,
  activity: Boolean;
}

const initialState: OrderState = {
  payment_method: "",
  card: "",
  exact_amount: false,
  bring_the_change_amount: null,
  shipping_time: null,
  store_note: "",
  bank: "",
  place_order: null,
  delivery_time: null,
  order_id: null,
  order_history: [],
  order_count: null,
  single_order: {},
  payment_status: null,
  item_price: {},
  activity: false,
};

interface APIParams {
  end_point: string;
  body: any;
}

export const place_order = createAsyncThunk(
  "order_place",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "order_place"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_order_history = createAsyncThunk(
  "order_history",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(data.end_point, data.body, "orders");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_single_order = createAsyncThunk(
  "single-order",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, data.body);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_payment_status = createAsyncThunk(
  "get_payment_status",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, data.body);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    handle_clear_order: (state: any) => {
      state.single_order = {} as any;
      state.order_history = [] as any;
      state.payment_status = null as any;
    },
    set_payment_type: (state, action: PayloadAction<any>) => {
      state.payment_method = action?.payload;
    },
    set_shipping_time: (state, action: PayloadAction<any>) => {
      state.shipping_time = action?.payload;
    },
    set_exact_amount: (state, action: PayloadAction<any>) => {
      state.exact_amount = action?.payload;
    },
    set_change_amount: (state, action: PayloadAction<any>) => {
      state.bring_the_change_amount = action?.payload;
    },
    set_store_note: (state, action: PayloadAction<any>) => {
      state.store_note = action?.payload;
    },
    set_bank: (state, action: PayloadAction<any>) => {
      state.bank = action?.payload;
    },
    set_delivery_time: (state, action: PayloadAction<any>) => {
      state.delivery_time = action?.payload;
    },
    set_order_id: (state, action: PayloadAction<any>) => {
      state.order_id = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(place_order.pending, (state, { payload }) => {
        state.activity = true;
      })

      .addCase(place_order.fulfilled, (state, { payload }) => {
        try {
          state.place_order = payload;
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(place_order.rejected, (state, { payload }) => {
        try {
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_order_history.pending, (state, { payload }) => {
        state.activity = true;
      })

      .addCase(get_order_history.fulfilled, (state, { payload }) => {
        try {
          state.order_history = [...state.order_history, ...payload?.data];
          state.order_count = payload?.total_count
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_order_history.rejected, (state, { payload }) => {
        try {
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_single_order.pending, (state, { payload }) => {
        state.activity = true;
      })

      .addCase(get_single_order.fulfilled, (state, { payload }) => {
        try {
          state.single_order = {...payload?.data, current_time: new Date()};
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_single_order.rejected, (state, { payload }) => {
        try {
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_payment_status.pending, (state, { payload }) => {
        state.activity = true;
      })

      .addCase(get_payment_status.fulfilled, (state, { payload }) => {
        try {
          state.payment_status = payload;
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })

      .addCase(get_payment_status.rejected, (state, { payload }) => {
        try {
          state.activity = false;
        } catch (error) {
          state.activity = false;
        }
      })
  },
});

export const {
  set_payment_type,
  set_shipping_time,
  set_exact_amount,
  set_change_amount,
  set_store_note,
  set_bank,
  set_delivery_time,
  set_order_id,
  handle_clear_order
} = orderSlice.actions;

export default orderSlice.reducer;
