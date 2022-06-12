const fs = require('fs');
const monacoThemes = require('monaco-themes/themes/themelist.json');

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

const finalOptions = [...moreOptions, ...options];

fs.writeFileSync('./themes.json', JSON.stringify(finalOptions));
