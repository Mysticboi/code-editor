import React, { useState } from 'react';

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
  selectEditorValue,
  changeOutput,
} from '../../redux/editor';

import './app.scss';
import { getSubmission, postSubmission } from '../../api/submissions';
import { Status } from '../../types';

const App = () => {
  const { value: language, id: languageId } = useAppSelector(selectLanguage);
  const input = useAppSelector(selectInput);
  const output = useAppSelector(selectOutput);
  const editorValue = useAppSelector(selectEditorValue);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [responseSubmission, setResponseSubmission] = useState<{
    status?: Status;
    time?: number;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeInput(e.target.value));
  };

  const handleClick = async () => {
    setLoading(true);
    const response = await postSubmission({
      source_code: editorValue,
      language_id: languageId,
      stdin: input,
    });
    const { token } = response.data;

    await sleep(2000);
    let i = 0;
    const getResponse = await getSubmission(token);
    let {
      status,
      stdout,
      stderr,
      time,
      compile_output: compileOutput,
    } = getResponse.data;
    for (i = 0; i < 5; i++) {
      console.log('Fetching...', i);
      await sleep(2000);
      const getResponse = await getSubmission(token);
      ({
        status,
        stdout,
        stderr,
        time,
        compile_output: compileOutput,
      } = getResponse.data);
      if (status.id > 2) break;
    }
    setLoading(false);
    if (i === 4) {
      // eslint-disable-next-line no-alert
      alert('Failed calling Judge0 compile API');
      return;
    }
    console.log('Receveid submission', {
      status,
      stderr: stderr && atob(stderr),
      stdout: stdout && atob(stdout),
      time,
      compileOutput: compileOutput && atob(compileOutput),
    });
    if (status.id === 3 && stdout) {
      dispatch(changeOutput(atob(stdout)));
    } else if (stderr) {
      dispatch(changeOutput(atob(stderr)));
    } else if (compileOutput) {
      dispatch(changeOutput(atob(compileOutput)));
    }
    setResponseSubmission({
      status,
      time,
    });
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
          <div
            className="output"
            style={{
              color:
                responseSubmission.status && responseSubmission.status.id !== 3
                  ? 'red'
                  : 'bluesky',
            }}
          >
            {responseSubmission.status && (
              <p className="response-title">
                Response with status: {responseSubmission.status.description}
              </p>
            )}
            {responseSubmission.time && (
              <p className="response-title">
                Processing time: {responseSubmission.time}s{' '}
              </p>
            )}
            {output}
          </div>
          <h2>Input</h2>
          <textarea
            id="input"
            placeholder="Input"
            spellCheck={false}
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="compile-button"
            onClick={handleClick}
          >
            {!loading ? <p>Compile</p> : <div className="loader" />}
          </button>
        </div>
      )}
    </div>
  );
};

const sleep = async (ms: number) => new Promise((r) => setTimeout(r, ms));

export default App;
