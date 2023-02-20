import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const url = 'http://localhost:3000/api/v1/messages/show';

// Fetch the greeting
export const fetchGreetings = createAsyncThunk(
  types.FETCH_GREETING,
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Set the initial state
const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    greeting(state, action) {
      state.greetings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        console.log('Im here');
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { greeting } = greetingsSlice.actions;
export default greetingsSlice.reducer;
