import React, { useState } from 'react';
import Select from 'react-select';
import themes from '../../data/themes.json';

import selectStyles from '../../styles/selectStyles.js';

type Theme = {
  name: string;
  label: string;
  value: string;
};

function ThemeSelect() {
  const [theme, setTheme] = useState<Theme | null>({
    name: 'VS Code Dark',
    label: 'VS Code Dark',
    value: 'vs-dark',
  });
  return (
    <Select
      options={themes}
      value={theme}
      onChange={(newValue) => setTheme(newValue)}
      styles={selectStyles}
    />
  );
}

export default ThemeSelect;
