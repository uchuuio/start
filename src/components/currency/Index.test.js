import React from 'react';
import { mount, shallow } from 'enzyme';

import { CurrencyComponent } from './Index';

describe('<Thought />', () => {
  const mockfetchLatestCurrency = jest.fn();
  let props = {
    modules: { currency: true },
    currency: { base: 'GBP', target: 'JPY', rates: { JPY: 150 } },
    fetchLatestCurrency: mockfetchLatestCurrency,
  };

  let currency = shallow(<CurrencyComponent {...props} />);

  it('should render', () => {
    expect(currency.is('.currency')).toBe(true);
  });

  describe('if nextFetch has not passed', () => {
    beforeEach(() => {
      props.currency.nextFetch = new Date();

      currency = mount(<CurrencyComponent {...props} />);
    });

    it('should not call fetchLatestCurrency', () => {
      expect(mockfetchLatestCurrency).not.toHaveBeenCalled();
    });
  });

  describe('if nextFetch has passed', () => {
    beforeEach(() => {
      props.currency.isFetching = false;
      props.currency.lastFetched = '';

      currency = mount(<CurrencyComponent {...props} />);
    });

    it('should call fetchLatestCurrency', () => {
      expect(mockfetchLatestCurrency).toHaveBeenCalled();
    });
  });
});
