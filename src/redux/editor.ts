import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';
import initValues from '../data/initValues';

import { Language } from '../types';

const initialState = {
  language: {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript',
    label: 'JavaScript (Node.js 12.14.0)',
  },
  editorValue: initValues.javascript,
  input: '',
  output: 'Output will go here',
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
    changeInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const selectLanguage = (state: RootState) => state.editor.language;
export const selectEditorValue = (state: RootState) => state.editor.editorValue;
export const selectInput = (state: RootState) => state.editor.input;
export const selectOutput = (state: RootState) => state.editor.output;

export const { changeLanguage, changeEditorValue, changeInput } =
  languageSlice.actions;

export default languageSlice.reducer;
