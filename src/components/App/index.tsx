import React from 'react';

import CodeEditor from '../CodeEditor';
import LanguageSelect from '../LanguageSelect';
import MarkDownPreview from '../MarkDownPreview';
import ThemeSelect from '../ThemeSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  selectLanguage,
  selectInput,
  changeInput,
  selectOutput,
} from '../../redux/editor';

import './app.scss';

const App = () => {
  const language = useAppSelector(selectLanguage).value;
  const input = useAppSelector(selectInput);
  const output = useAppSelector(selectOutput);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeInput(e.target.value));
  };

  return (
    <div className="app-container">
      <div>
        <div className="container-select">
          <LanguageSelect />
          <ThemeSelect />
        </div>
        <CodeEditor />
      </div>

      {language === 'markdown' ? (
        <MarkDownPreview />
      ) : (
        <div className="output-container">
          <h2>Output</h2>
          <div className="output">{output}</div>
          <h2>Input</h2>
          <textarea
            id="input"
            placeholder="Input"
            spellCheck={false}
            value={input}
            onChange={handleInputChange}
          />
          <button type="button" className="compile-button">
            <div className="loader" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
