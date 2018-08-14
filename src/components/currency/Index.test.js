import React from 'react';
import { shallow } from 'enzyme';

import { CurrencyComponent } from './Index';

describe('<Currency />', () => {
  const props = { currency: { base: 'GBP', target: 'JPY', rates: { JPY: 150 } }, modules: {} };

  it('should render', () => {
    expect(shallow(<CurrencyComponent {...props} />).is('.currency')).toBe(true);
  });
});
