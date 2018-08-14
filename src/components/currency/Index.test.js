import React from 'react';
import { shallow } from 'enzyme';

import { CurrencyComponent } from './Index';

describe('<Currency />', () => {
  const props = { base: 'GBP', target: 'JPY', rates: { JPY: 150 } };

  it('should render', () => {
    expect(
      shallow(<CurrencyComponent currency={props} />).is('.currency')
    ).toBe(true);
  });
});
