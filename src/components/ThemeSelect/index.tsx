import React from 'react';
import Select from 'react-select';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import themes from '../../data/themes.json';
import { changeTheme, selectTheme } from '../../redux/theme';

import { Theme } from '../../types';
import selectStyles from '../../styles/selectStyles.js';

function ThemeSelect() {
  const theme = useAppSelector(selectTheme);
  const state = useAppSelector((state) => state);
  console.log('state', state);
  console.log('theme', theme);

  const dispatch = useAppDispatch();

  const handleChange = (newValue: Theme) => {
    console.log('newValue', newValue);
    dispatch(changeTheme(newValue));
  };
  return (
    <Select
      options={themes}
      value={theme}
      onChange={(newValue) => {
        if (newValue) {
          handleChange(newValue);
        }
      }}
      styles={selectStyles}
    />
  );
}

export default ThemeSelect;
