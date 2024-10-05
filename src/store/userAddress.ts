import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "utils/localStore";

interface AddressState {
  address: any;
  chosen_address_index: any;
  edit_address: any;
  add_address: any;
  store: any;
}

const initialState: AddressState = {
  address: getDataFromLocalStorage("userAddresses") || [],
  chosen_address_index: null,
  store: null,
  add_address: {},
  edit_address: {},
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    set_address: (state, action: PayloadAction<any>) => {
      state.address = [{ ...action.payload, id: Date.now() }, ...state.address];
      saveDataToLocalStorage("userAddresses", state.address);
    },
    delete_address: (state, action: PayloadAction<number>) => {
      const index_to_delete = action.payload;
      state.address?.splice(index_to_delete, 1);
      saveDataToLocalStorage("userAddresses", state.address);
    },
    edit_address: (
      state,
      action: PayloadAction<{ id: any; new_address: any }>
    ) => {
      const { id, new_address } = action.payload;
      const address_to_edit = state.address?.findIndex(
        (item: any) => Number(item?.id) === Number(id)
      );
      state.address[address_to_edit] = new_address;

      saveDataToLocalStorage("userAddresses", state.address);
    },
    selected_address: (state, action: PayloadAction<any>) => {
      state.chosen_address_index = action?.payload;
    },
    set_store: (state, action: PayloadAction<any>) => {
      state.store = action?.payload;
    },
    set_add_address: (state, action: PayloadAction<any>) => {
      state.add_address = action?.payload;
    },
  },
});

export const {
  set_address,
  delete_address,
  edit_address,
  selected_address,
  set_store,
  set_add_address,
} = addressSlice.actions;

export default addressSlice.reducer;
