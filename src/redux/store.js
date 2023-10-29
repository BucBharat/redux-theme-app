// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
  },
});
