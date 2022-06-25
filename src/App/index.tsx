import React from 'react';
import CodeEditor from '../components/CodeEditor';
import LanguageSelect from '../components/LanguageSelect';
import MarkDownPreview from '../components/MarkDownPreview';
import ThemeSelect from '../components/ThemeSelect';
import { useAppSelector } from '../hooks/redux';
import { selectLanguage } from '../redux/editor';

import './app.scss';

const App = () => {
  const language = useAppSelector(selectLanguage).value;
  return (
    <>
      <p className="paragraph">Welcome to my code editor</p>
      <div className="app-container">
        <div>
          <div className="container-select">
            <LanguageSelect />
            <ThemeSelect />
          </div>
          <CodeEditor />
        </div>

        <div>{language === 'markdown' && <MarkDownPreview />}</div>
      </div>
    </>
  );
};

export default App;
