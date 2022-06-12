import React, { useState } from 'react';
import Select from 'react-select';
import monacoThemes from 'monaco-themes/themes/themelist.json';

import selectStyles from '../../styles/selectStyles.js';

type Theme = {
  name: string;
  label: string;
  value: string;
};

const options = Object.entries(monacoThemes).map(([key, value]) => ({
  name: value,
  label: value,
  value: key,
}));

const moreOptions = [
  {
    name: 'VS Code Dark',
    label: 'VS Code Dark',
    value: 'vs-dark',
  },
  {
    name: 'Light',
    label: 'Light',
    value: 'light',
  },
];

const finalOptions: Theme[] = [...moreOptions, ...options];

function ThemeSelect() {
  const [theme, setTheme] = useState<Theme | null>({
    name: 'VS Code Dark',
    label: 'VS Code Dark',
    value: 'vs-dark',
  });
  return (
    <Select
      options={finalOptions}
      value={theme}
      onChange={(newValue) => setTheme(newValue)}
      styles={selectStyles}
    />
  );
}

export default ThemeSelect;
