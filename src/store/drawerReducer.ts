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
  name: "drawer",
  initialState,
  reducers: {
    handleOpen: (state: DrawerState) => {
      return {
        ...state,
        opened: true,
      };
      
    },
    handleClose: (state: DrawerState) => {
      return {
        ...state,
        opened: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleOpen, handleClose } = drawerSlice.actions;

export default drawerSlice.reducer;
