import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from '../components/CheckBox';

describe('the CheckBox component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CheckBox />);

    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}');
  });
});
