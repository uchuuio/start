import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Thought from './Index.jsx';

it('should render', () => {
    expect(
        shallow(<Thought />).is('.thought')
    ).toBe(true);
});
