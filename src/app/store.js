import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listSlice.js";

export default configureStore({
  reducer: {
    list: listReducer,
  },
});
