import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  return (
    <div>
      <p className="text-center text-xl">Welcome to my Code Editor</p>
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
