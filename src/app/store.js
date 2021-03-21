import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice.js";
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    task: taskReducer,
    // list: listReducer,
  },
});
