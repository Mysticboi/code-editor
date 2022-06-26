import React from 'react';

import CodeEditor from '../CodeEditor';
import LanguageSelect from '../LanguageSelect';
import MarkDownPreview from '../MarkDownPreview';
import ThemeSelect from '../ThemeSelect';
import { useAppSelector } from '../../hooks/redux';
import { selectLanguage } from '../../redux/editor';

import './app.scss';

const App = () => {
  const language = useAppSelector(selectLanguage).value;
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
          <div className="output">4</div>
          <h2>Input</h2>
          <textarea id="input" placeholder="Input" spellCheck={false} />
          <button type="button" className="compile-button">
            <div className="loader" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
