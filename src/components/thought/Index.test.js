import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Thought from './Index';

describe('<Thought />', () => {
  it('should render', () => {
    expect(shallow(<Thought />).is('.thought')).toBe(true);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Thought.prototype, 'componentDidMount');
    const wrapper = shallow(<Thought />);
    expect(Thought.prototype.componentDidMount.calledOnce).toBe(true);
  });
});
