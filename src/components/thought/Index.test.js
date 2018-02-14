import React from 'react';
import { shallow } from 'enzyme';
import Thought from './Index';

it('should render', () => {
  expect(shallow(<Thought />).is('.thought')).toBe(true);
});
