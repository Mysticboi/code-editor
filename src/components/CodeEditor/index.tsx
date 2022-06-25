import React from 'react';
import Editor from '@monaco-editor/react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectTheme } from '../../redux/theme';

import './container.scss';
import {
  changeEditorValue,
  selectEditorValue,
  selectLanguage,
} from '../../redux/editor';

const CodeEditor = () => {
  const editorValue = useAppSelector(selectEditorValue);
  const theme = useAppSelector(selectTheme).value;
  const language = useAppSelector(selectLanguage).value;

  const dispatch = useAppDispatch();

  const handleValueChange = (value: string | undefined) => {
    dispatch(changeEditorValue(value));
  };

  return (
    <div className="container">
      <Editor
        width="100%"
        height="45em"
        theme={theme}
        value={editorValue}
        onChange={handleValueChange}
        language={language.toString()}
      />
    </div>
  );
};

export default CodeEditor;
