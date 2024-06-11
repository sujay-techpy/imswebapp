import { configureStore } from "@reduxjs/toolkit";
import CombineReducers from "../Data/CombineReducer";

const Store = configureStore({
  reducer: CombineReducers,
});

export default Store;
