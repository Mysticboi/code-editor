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
import { Status } from '../../types';
import {
  decodeBase64,
  logSubmission,
  postSubmissionAndGetResponse,
} from '../../utils';

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
    memory?: number;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeInput(e.target.value));
  };

  const updateOutputFromResponse = (base64Output: string): void => {
    dispatch(changeOutput(decodeBase64(base64Output)));
  };

  const handleClick = async () => {
    setLoading(true);

    const submission = await postSubmissionAndGetResponse(
      editorValue,
      languageId,
      input
    );
    const {
      failedFetching,
      status,
      stdout,
      stderr,
      compileOutput,
      time,
      memory,
    } = submission;
    setLoading(false);

    if (failedFetching) {
      // eslint-disable-next-line no-alert
      alert('Failed calling Judge0 compile API');
      return;
    }

    logSubmission(submission);
    if (status?.id === 3 && stdout) {
      updateOutputFromResponse(stdout);
    } else if (stderr) {
      updateOutputFromResponse(stderr);
    } else if (compileOutput) {
      updateOutputFromResponse(compileOutput);
    }
    setResponseSubmission({
      status,
      time,
      memory,
    });
  };

  return (
    <>
      <h1 className="made-by">
        Made by{' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/Mysticboi">
          Walid
        </a>
      </h1>
      <div className="app-container">
        <div>
          <div className="container-select">
            <h2>Language: </h2>
            <LanguageSelect /> <h2>Theme: </h2>
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
                  responseSubmission.status &&
                  responseSubmission.status.id !== 3
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
                  Runtime: {responseSubmission.time} seconds{' '}
                </p>
              )}
              {responseSubmission.memory && (
                <p className="response-title">
                  Memory used: {responseSubmission.memory} kilobytes{' '}
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
              {!loading ? <h2>Compile</h2> : <div className="loader" />}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
