import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';
import initValues from '../data/initValues';

import { Language } from '../types';

const initialState: { language: Language; editorValue: string } = {
  language: {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript',
    label: 'JavaScript (Node.js 12.14.0)',
  },
  editorValue: initValues.javascript,
};

const languageSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const language: Language = action.payload;
      state.language = language;
      if (Object.keys(initValues).includes(language.value)) {
        state.editorValue =
          initValues[language.value as keyof typeof initValues];
      } else {
        state.editorValue = '';
      }
      return state;
    },
    changeEditorValue: (state, action) => {
      state.editorValue = action.payload;
    },
  },
});

export const selectLanguage = (state: RootState) => state.editor.language;
export const selectEditorValue = (state: RootState) => state.editor.editorValue;

export const { changeLanguage, changeEditorValue } = languageSlice.actions;

export default languageSlice.reducer;
