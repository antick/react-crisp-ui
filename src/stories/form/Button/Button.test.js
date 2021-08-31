import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('the Button component', () => {
  it('should render without crashing', () => {
    render(<Button />);
  });
});
