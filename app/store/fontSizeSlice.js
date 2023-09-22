import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
  name: "fontSize",
  initialState: "base",
  reducers: {
    setFontSize: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;