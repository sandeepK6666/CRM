import { createSlice } from "@reduxjs/toolkit";
import { getCandidates, updateCandidate } from "../actions/candidateActions";

const initialState = {
  loading: false,
  error: null,
  getCandidatesData: [],
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCandidates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.getCandidatesData = action.payload;
        state.error = null;
      })
      .addCase(getCandidates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCandidate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCandidate.fulfilled, (state, action) => {
        state.loading = false;
        state.getCandidatesData = action.payload;
        state.error = null;
      })
      .addCase(updateCandidate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default candidateSlice.reducer;
