import React from 'react';
import Editor from '@monaco-editor/react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
  color: aquamarine;
`;

function App() {
  return (
    <div>
      <Paragraph>Welcome to my Code Editor</Paragraph>
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
