import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DateTime from './Index';

describe('<DateTime />', () => {
  const props = { locale: 'EN', modules: {} };

  it('should render', () => {
    expect(shallow(<DateTime {...props} />).is('.datetime')).toBe(true);
  });

  it('calls componentDidMount', () => {
    sinon.spy(DateTime.prototype, 'componentDidMount');
    const wrapper = shallow(<DateTime {...props} />);
    expect(DateTime.prototype.componentDidMount.calledOnce).toBe(true);
  });
});
