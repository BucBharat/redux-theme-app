import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '#1976d2',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = themeSlice.actions;
export default themeSlice.reducer;
