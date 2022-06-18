import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '../types';
import { RootState, AppDispatch } from './store';

const initialState: Theme = {
  name: 'VS Code Dark',
  label: 'VS Code Dark',
  value: 'vs-dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      console.log('action', action);
      state = action.payload;
      return state;
    },
  },
});

export const changeThemeAsync = (theme: Theme) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(changeTheme(theme));
  }, 1000);
};

export const selectTheme = (state: RootState) => state.theme;

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
