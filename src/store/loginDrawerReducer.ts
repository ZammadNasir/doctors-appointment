import { createSlice } from "@reduxjs/toolkit";
import config from "config";

interface DrawerState {
  opened: boolean;
  isOpen: any;
  defaultId: "default";
  fontFamily: string;
  borderRadius: number;
}

const initialState: DrawerState = {
  opened: false,
  isOpen: [],
  defaultId: "default",
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
};

const drawerSlice = createSlice({
  name: "logindrawer",
  initialState,
  reducers: {
    openLoginDrawer: (state: DrawerState) => {
      return {
        ...state,
        opened: true,
      };
      
    },
    closeLoginDrawer: (state: DrawerState) => {
      return {
        ...state,
        opened: false,
      };
    },
  },
});

export const { openLoginDrawer, closeLoginDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
