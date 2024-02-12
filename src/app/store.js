import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../features/studentSlice";

export const studentStore = configureStore({
     reducer:{
        student:studentSlice,
     },
});