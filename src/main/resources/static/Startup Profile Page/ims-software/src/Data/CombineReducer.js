import { combineReducers } from "@reduxjs/toolkit";
import StartupProfileSlice from "../Data/Slices/StartupProfileSlice";

const CombineReducers = combineReducers({
  Company: StartupProfileSlice,
});

export default CombineReducers;
