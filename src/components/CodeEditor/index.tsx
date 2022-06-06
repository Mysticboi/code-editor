import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Container from './Container';

const initValue = "console.log('Hello Code Editor');";

function CodeEditor() {
  const [editorValue, setEditorValue] = useState<string | undefined>(initValue);

  const handleValueChange = (value: string | undefined) => {
    setEditorValue(value);
  };

  return (
    <Container>
      <Editor
        height="90vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue={initValue}
        theme="vs-dark"
        value={editorValue}
        onChange={handleValueChange}
      />
    </Container>
  );
}

export default CodeEditor;
