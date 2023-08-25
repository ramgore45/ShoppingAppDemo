import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";


export const  CartStore = configureStore({
    reducer:{
        cart:cartSlice,
    },
}) 