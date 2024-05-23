import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "../actions/todoActions";

const initialState = {
  getTodoData: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.getTodoData = action.payload;
        state.error = null;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
