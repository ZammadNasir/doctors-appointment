import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerReducer";
import language_slicer from "./transalationReducer";
import address_slicer from "./userAddress";
import category_slicer from "./categoryReducer";
import productSlice from "./productReducer";
import offerSlicer from "./offerReducer";
import userSlice from "./userProfile";
import userRegisterSlice from "./userRegisterReducer";
import orderSlice from "./orderReducer";
import storeSlice from "./storeReducer";
import loginDrawerReducer from "./loginDrawerReducer";

// ==============================|| REDUX - MAIN STORE ||============================== //

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    language: language_slicer,
    address: address_slicer,
    category: category_slicer,
    product: productSlice,
    offer: offerSlicer,
    user: userSlice,
    userRegister: userRegisterSlice,
    order: orderSlice,
    store: storeSlice,
    logindrawer: loginDrawerReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
