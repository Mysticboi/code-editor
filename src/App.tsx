import React from 'react';
import styled from 'styled-components';
import CodeEditor from './components/CodeEditor';
import LanguageSelect from './components/LanguageSelect';

const Paragraph = styled.p`
  font-size: 40px;
  text-align: center;
  color: blue;
`;

function App() {
  return (
    <div>
      <Paragraph>Welcome to my code editor</Paragraph>
      <LanguageSelect />
      <CodeEditor />
    </div>
  );
}

export default App;
