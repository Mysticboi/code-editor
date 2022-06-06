import React, { useState } from 'react';
import Select from 'react-select';
import languages from '../../data/languages.json';

type Language = {
  id: Number;
  name: String;
  value: String;
  label: String;
};

function LanguageSelect() {
  const [language, setLanguage] = useState<Language | null>({
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript',
    label: 'JavaScript (Node.js 12.14.0)',
  });

  console.log(language);
  return (
    <Select
      options={languages}
      value={language}
      onChange={(newValue) => setLanguage(newValue)}
    />
  );
}

export default LanguageSelect;
