export type Theme = {
  name: string;
  label: string;
  value: string;
};

export type Language = Theme & {
  id: number;
};

export type SubmissionRequest = {
  source_code: string;
  language_id: number;
  stdin: string;
};

export type PostSubmissionResponse = {
  token: string;
};

export type GetSubmissionResponse = {
  stdout: string | null;
  time: number; // In seconds
  memory: number; // In kilobytes
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  status: {
    id: number;
    description: string;
  };
};
