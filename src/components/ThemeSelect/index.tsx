import Select from 'react-select';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import themes from '../../data/themes.json';
import { changeThemeWithMonaco, selectTheme } from '../../redux/theme';

import { Theme } from '../../types';
import { selectThemeStyles } from '../../styles/selectStyles';

const ThemeSelect = () => {
  const theme = useAppSelector(selectTheme);

  const dispatch = useAppDispatch();

  const handleChange = (newValue: Theme | null) => {
    if (newValue) dispatch(changeThemeWithMonaco(newValue));
  };
  return (
    <Select
      options={themes}
      value={theme}
      onChange={handleChange}
      styles={selectThemeStyles}
    />
  );
};

export default ThemeSelect;
