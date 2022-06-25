import axios, { AxiosResponse } from 'axios';
import apikey from '../apikey.json';
import {
  SubmissionRequest,
  GetSubmissionResponse,
  PostSubmissionResponse,
} from '../types';

const BASE_URL = 'https://judge0-ce.p.rapidapi.com';
const config = {
  params: { base64_encoded: 'true', fields: '*' },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    ...apikey,
  },
};

export const postSubmission = (
  submission: SubmissionRequest
): Promise<AxiosResponse<PostSubmissionResponse>> =>
  axios.post(`${BASE_URL}/submissions`, submission, config);

export const getSubmission = (
  submissionToken: string
): Promise<AxiosResponse<GetSubmissionResponse>> =>
  axios.get(`${BASE_URL}/submissions/${submissionToken}`, config);
