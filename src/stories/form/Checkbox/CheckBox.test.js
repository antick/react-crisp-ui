import React from 'react';
import { render } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('the CheckBox component', () => {
  it('should render without crashing', () => {
    render(<CheckBox />);
  });
});
