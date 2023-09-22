import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity } = action.payload;
      
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        
        existingItem.quantity += quantity;
      } else {
        
        state.items.push({ ...item, quantity });
      }

     
      state.totalItems += quantity;
    },
    removeFromCart: (state, action) => {
      const { item, quantity } = action.payload;
      
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        
        existingItem.quantity -= quantity;

        
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((cartItem) => cartItem.id !== item.id);
        }

        
        state.totalItems -= quantity;
      }
    },
    emptyCart: (state) => {
      // Vaciar el carrito completamente
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;





