/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '../test-utils';

import App from '../../App';

it('renders correctly', () => {
  render(<App />);
  expect(screen.getByText('JavaScript (Node.js 12.14.0)')).toBeTruthy();
  expect(screen.getByText('VS Code Dark')).toBeTruthy();
});
