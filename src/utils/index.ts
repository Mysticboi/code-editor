import { Buffer } from 'buffer';

import { getSubmission, postSubmission } from '../api/submissions';

export const sleep = async (ms: number) =>
  new Promise((r) => setTimeout(r, ms));

export const encodeBase64 = (str: string): string =>
  Buffer.from(str).toString('base64');

export const decodeBase64 = (str: string): string =>
  Buffer.from(str, 'base64').toString();

export const postSubmissionAndGetResponse = async (
  editorValue: string,
  languageId: number,
  input: string
) => {
  try {
    const response = await postSubmission({
      source_code: editorValue,
      language_id: languageId,
      stdin: input,
    });
    const { token } = response.data;

    let i = 0;
    let status, stdout, stderr, time, compileOutput, memory;
    for (i = 0; i < 3; i++) {
      console.log('Fetching submission...', i);
      await sleep(2000);
      const getResponse = await getSubmission(token);
      console.log('gerResponse', getResponse);
      ({
        status,
        stdout,
        stderr,
        time,
        compile_output: compileOutput,
        memory,
      } = getResponse.data);
      if (status.id > 2) break;
    }
    return {
      failedFetching: i === 4,
      status,
      stdout,
      stderr,
      compileOutput,
      time,
      memory,
    };
  } catch (e) {
    console.error(e);
    return { failedFetching: true };
  }
};

export const logSubmission = (
  submission: Awaited<ReturnType<typeof postSubmissionAndGetResponse>>
) => {
  const { status, stderr, stdout, compileOutput, memory, time } = submission;
  console.log('Receveid submission', {
    status,
    stderr: stderr && decodeBase64(stderr),
    stdout: stdout && decodeBase64(stdout),
    compileOutput: compileOutput && decodeBase64(compileOutput),
    memory,
    time,
  });
};
