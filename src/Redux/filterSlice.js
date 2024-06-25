import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state.value,
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const filterSlice = slice.reducer;
export const { selectFilter } = slice.selectors;
export const { setFilter } = slice.actions;
