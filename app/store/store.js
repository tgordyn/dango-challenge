import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from "./cartSlice";
import titleSlice from "./titleSlice";
import editingReducer from "./editingSlice";
import fontSizeReducer from "./fontSizeSlice";

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        title: titleSlice,
        editing: editingReducer,
        fontSize: fontSizeReducer,
    }
})