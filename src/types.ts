export type Theme = {
  name: string;
  label: string;
  value: string;
};

export type Language = Theme & {
  id: number;
};
