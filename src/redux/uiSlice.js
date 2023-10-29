import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    header: false,
    footer: false,
    drawerOverlay: false,
    leftDrawer: false,
    rightDrawer: false,
    navigationTabs: false,
    bottomMenu: false,
  },
  reducers: {
    setSelection: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    resetSelections: state => {
      state = {
        header: false,
        footer: false,
        drawerOverlay: false,
        leftDrawer: false,
        rightDrawer: false,
        navigationTabs: false,
        bottomMenu: false,
      };
    },
  },
});

export const { setSelection, resetSelections } = uiSlice.actions;

export const selectUIState = state => state.ui;

export default uiSlice.reducer;
