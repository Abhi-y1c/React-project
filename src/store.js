import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productslice"
const store=configureStore({
  reducer:{
   addtocart:productReducer,
  }
})
export default store;