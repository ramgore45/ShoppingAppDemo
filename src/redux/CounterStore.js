import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";


export const  CounterStore = configureStore({
    reducer:{
        counter:CounterSlice
    }
})