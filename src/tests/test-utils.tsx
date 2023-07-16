import { ReactNode, ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import themeReducer from '../redux/theme';
import editorReducer from '../redux/editor';
import { Store } from '../redux/store';

// Writing a new render function that wraps the original one and provides a store
// See more on https://redux.js.org/usage/writing-tests
const render = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        theme: themeReducer,
        editor: editorReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: object;
    store?: Store;
  } = {}
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
