import { StylesConfig } from 'react-select';
import { Language, Theme } from '../types';

type isMulti = false;

const getStyles = <T>(): StylesConfig<T, isMulti> => ({
  control: (styles) => ({
    ...styles,
    width: '16em',
    height: '3em',
    fontSize: '1em',
    boxShadow: '5px 5px 0px 0px ',
    border: '3px solid black',
    ':hover': {
      boxShadow: 'none',
      border: '3px solid lightskyblue',
    },
    borderRadius: '1em',
    marginLeft: '2em',
  }),
  option: (styles) => ({
    ...styles,
    fontSize: '1em',
    padding: '10px',
  }),
  menu: (styles) => ({
    ...styles,
    width: '17em',
  }),
});

export const selectLanguageStyles = getStyles<Language>();
export const selectThemeStyles = getStyles<Theme>();
