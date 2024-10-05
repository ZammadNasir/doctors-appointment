import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "services/RequestHandler";

interface profileInterface {
  user_profile: any;
  user_addresses: any;
  update_profile: any;
  delete_address: any;
  add_address: any;
  address_status: any;
  language: string;
  activity: boolean;
}

interface APIParams {
  end_point: string;
  body: any;
  channel?: string;
}

const initialState: profileInterface = {
  user_profile: {},
  update_profile: {},
  user_addresses: [],
  delete_address: {},
  address_status: null,
  language: "",
  add_address: {},
  activity: false,
};

export const get_user_profile = createAsyncThunk(
  "user/profile",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(
        data.end_point,
        "userprofile"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_user_addresses = createAsyncThunk(
  "user/addresses",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(
        data.end_point,
        "useraddresses"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const update_profile = createAsyncThunk(
  "update-profile",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "update-profile"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const update_language = createAsyncThunk(
  "update-language",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "update-language"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deletet_user_addresses = createAsyncThunk(
  "delete/address",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "deleteaddress"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const add_user_addresses = createAsyncThunk(
  "add/address",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "addaddress"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const upload_user_profile = createAsyncThunk(
  "upload/image",
  async (data: any) => {
    try {
      let formData = new FormData();
      formData.append("file", data.body);
      let response = await apiServices.postFromImage(
        data.end_point,
        formData,
        "user-profile",
        { headers: { "Content-Type": "multipart/form-data" } },
      )

      return response;

    } catch (err) {
      console.log(err);
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handle_clear_form: (state: profileInterface, action: any) => {
      state.delete_address = {};
      state.add_address = {};
      state.update_profile = {};
      state.activity = false;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(get_user_profile.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_user_profile.fulfilled, (state: any, { payload }: any) => {
        state.user_profile = payload?.data;
        state.activity = false;
      })

      .addCase(get_user_addresses.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_user_addresses.fulfilled, (state: any, { payload }: any) => {
        state.user_addresses = payload?.data;
        state.address_status = payload?.status
        state.activity = false;
      })
      .addCase(deletet_user_addresses.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(deletet_user_addresses.fulfilled, (state: any, { payload }: any) => {
        state.delete_address = payload;
        state.activity = false;
      })
      .addCase(add_user_addresses.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(add_user_addresses.fulfilled, (state: any, { payload }: any) => {
        state.add_address = payload;
        state.activity = false;
      })
      
      .addCase(update_profile.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(update_profile.fulfilled, (state: any, { payload }: any) => {
        state.update_profile = payload;
        state.activity = false;
      })

      .addCase(update_language.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(update_language.fulfilled, (state: any, { payload }: any) => {
        state.language = payload;
        state.activity = false;
      })

      .addCase(upload_user_profile.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(upload_user_profile.fulfilled, (state: any, { payload }: any) => {
        state.upload_img = payload?.data
        state.activity = false;
      })
  },
});

export const { handle_clear_form } = userSlice.actions;

export default userSlice.reducer;
