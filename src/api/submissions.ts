import axios, { AxiosResponse } from 'axios';
import {
  SubmissionRequest,
  GetSubmissionResponse,
  PostSubmissionResponse,
} from '../types';
import { encodeBase64 } from '../utils';

const BASE_URL = 'https://judge0-ce.p.rapidapi.com';

const getConfig = async () => {
  let apikey: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };

  if (process.env.NODE_ENV === 'development') {
    apikey = await import('../apikey.json');
  } else {
    apikey = {
      'X-RapidAPI-Key': process.env.REACT_APP_KEY || '',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    };
  }

  const config = {
    params: { base64_encoded: 'true', fields: '*' },
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      ...apikey,
    },
  };

  return config;
};

export const postSubmission = async (
  submission: SubmissionRequest
): Promise<AxiosResponse<PostSubmissionResponse>> => {
  const config = await getConfig();
  const encodedSubmission: SubmissionRequest = {
    source_code: encodeBase64(submission.source_code),
    language_id: submission.language_id,
    stdin: encodeBase64(submission.stdin),
  };
  return axios.post(`${BASE_URL}/submissions`, encodedSubmission, config);
};

export const getSubmission = async (
  submissionToken: string
): Promise<AxiosResponse<GetSubmissionResponse>> => {
  const config = await getConfig();
  return axios.get(`${BASE_URL}/submissions/${submissionToken}`, config);
};
