import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchJobs } from './api/api'; // Assuming API functions in api.js

const initialState = {
  joblists: [],
  status: 'idle',
  error: null,
};

export const fetchJobsAsync = createAsyncThunk(
  'jobs/fetchJobs',
  async () => {
    const data = await fetchJobs(); // Call API function and get data directly
    return data; // Return the actual data
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.joblists = action.payload;
      })
      .addCase(fetchJobsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
