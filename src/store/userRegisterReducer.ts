import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStringFromLocalStorage } from "utils/localStore";
const token = getStringFromLocalStorage("token");

interface AddressState {
  user_type: string;
  is_membership: Boolean;
  edit_address: Boolean;
  add_address: Boolean;
  delivery_type: string | null;
  service_method_available: Boolean;

  sign_up_steps: string;
  forgot_password: Boolean;
  phone: string | number;
  phone_code: string | number;
  otp: string | number;
  customer_id: number | null
  show_popup: Boolean;
}

const initialState: AddressState = {
  user_type: "",
  is_membership: token ? true : false,
  edit_address: false,
  add_address: false,
  delivery_type: null,
  service_method_available: true,

  sign_up_steps: "phone_number",
  // sign_up_steps: "sign_up_details",
  // sign_up_steps: "otp_verification",
  forgot_password: false,
  phone: "",
  phone_code: "",
  otp: "",
  customer_id: null,
  show_popup: false,
};

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    set_user_type: (state, action: PayloadAction<any>) => {
      state.user_type = action?.payload;
    },
    set_membership: (state, action: PayloadAction<any>) => {
      state.is_membership = action?.payload;
    },
    set_edit_address: (state, action: PayloadAction<any>) => {
      state.edit_address = action?.payload;
    },
    set_signup_steps: (state, action: PayloadAction<any>) => {
      state.sign_up_steps = action?.payload;
    },
    set_phone: (state, action: PayloadAction<any>) => {
      state.phone = action?.payload;
    },
    set_phone_code: (state, action: PayloadAction<any>) => {
      state.phone_code = action?.payload;
    },
    set_otp: (state, action: PayloadAction<any>) => {
      state.otp = action?.payload;
    },
    set_customer_id: (state, action: PayloadAction<any>) => {
      state.customer_id = action?.payload;
    },
    set_forgot_password: (state, action: PayloadAction<any>) => {
      state.forgot_password = action?.payload;
    },
    set_show_popup: (state, action: PayloadAction<any>) => {
      state.show_popup = action?.payload;
    },
    set_service_method_available: (state, action: PayloadAction<any>) => {
      state.service_method_available = action?.payload;
    },
  },
});

export const {
  set_user_type,
  set_membership,
  set_signup_steps,
  set_phone,
  set_phone_code,
  set_otp,
  set_customer_id,
  set_edit_address,
  set_forgot_password,
  set_show_popup,
  set_service_method_available
} = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
