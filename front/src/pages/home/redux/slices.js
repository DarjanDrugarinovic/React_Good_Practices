import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loading: action.payload
      };
    },
    handleError: (state, action) => {
      return {
        ...state,
        error: action.payload
      };
    },
    setQuotes: (state, action) => {
      return {
        ...state,
        quotes: action.payload
      };
    },
    setQuotesCount: (state, action) => {
      return {
        ...state,
        quotesCount: action.payload
      };
    },
    setVoting: (state, action) => {
      return {
        ...state,
        voting: action.payload
      };
    },
    setTags: (state, action) => {
      return {
        ...state,
        tags: action.payload
      };
    }
  }
});

export const {
  loading,
  handleError,
  setQuotes,
  setVoting,
  setQuotesCount,
  setTags
} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
