import React from 'react';
import CodeEditor from '../components/CodeEditor';
import LanguageSelect from '../components/LanguageSelect';
import ThemeSelect from '../components/ThemeSelect';

import './app.scss';

function App() {
  return (
    <div>
      <p className="paragraph">Welcome to my code editor</p>
      <div className="container-select">
        Language : <LanguageSelect />
        <ThemeSelect />
      </div>
      <CodeEditor />
    </div>
  );
}

export default App;
