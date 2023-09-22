import { createSlice } from "@reduxjs/toolkit";

const editingSlice = createSlice({
  name: "editing",
  initialState: false,
  reducers: {
    setEditing: (state, action) => {
      return action.payload;
    },
  },
});

export const { setEditing } = editingSlice.actions;
export default editingSlice.reducer