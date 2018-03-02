import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { CurrencyComponent } from './Index';

describe('<Currency />', () => {
  const props = { base: 'GBP', target: 'JPY' };

  it('should render', () => {
    expect(
      shallow(<CurrencyComponent currency={props} />).is('.currency')
    ).toBe(true);
  });

  it('calls componentDidMount', () => {
    sinon.spy(CurrencyComponent.prototype, 'componentDidMount');
    const wrapper = shallow(<CurrencyComponent currency={props} />);
    expect(CurrencyComponent.prototype.componentDidMount.calledOnce).toBe(true);
  });
});
