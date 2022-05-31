import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  return (
    <div>
      Welcome to my Code Editor
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// comment"
        theme="vs-dark"
      />
    </div>
  );
}

export default App;
