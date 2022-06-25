import React from 'react';
import Select from 'react-select';

import languages from '../../data/languages.json';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLanguage, selectLanguage } from '../../redux/editor';
import { selectLanguageStyles } from '../../styles/selectStyles';

import { Language } from '../../types';

const LanguageSelect = () => {
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  console.log('language', language);

  const handleChange = (newValue: Language | null) => {
    if (newValue) dispatch(changeLanguage(newValue));
  };

  return (
    <Select
      options={languages}
      value={language}
      onChange={handleChange}
      styles={selectLanguageStyles}
    />
  );
};

export default LanguageSelect;
