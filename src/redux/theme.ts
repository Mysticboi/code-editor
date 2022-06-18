import { createSlice } from '@reduxjs/toolkit';
import { loader } from '@monaco-editor/react';

import { RootState, AppDispatch } from './store';

import { Theme } from '../types';

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

export const changeThemeWithMonaco =
  (theme: Theme) => async (dispatch: AppDispatch) => {
    if (theme.value === 'vs-dark' || theme.value === 'light') {
      dispatch(changeTheme(theme));
    } else {
      const monaco = await loader.init();
      const themeData = await import(`monaco-themes/themes/${theme.name}`);
      monaco.editor.defineTheme(theme.value, themeData);
      dispatch(changeTheme(theme));
    }
  };

export const selectTheme = (state: RootState) => state.theme;

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
