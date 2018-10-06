import fetch from 'isomorphic-fetch';

import { CURRENCY } from './../constants/actionTypes';

export function refreshState() {
  return {
    type: CURRENCY.REFRESH_STATE,
  };
}

export function updateCurrencySettings(baseCurrency, targetCurrency) {
  return {
    type: CURRENCY.UPDATE_CURRENCY_SETTING,
    base: baseCurrency,
    target: targetCurrency,
  };
}

export function fetchCurrency(
  baseCurrency = 'GBP',
  targetCurrency = 'USD,JPY'
) {
  const url = `https://frankfurter.app/latest?base=${baseCurrency}&symbols=${targetCurrency}`;

  return {
    type: CURRENCY.FETCH_CURRENCY,
    payload: () => {
      return fetch(url)
        .then(response => response.json())
        .then(res => {
          const currencies = targetCurrency.split(',');
          return {
            base: baseCurrency,
            target: targetCurrency,
            currencies,
            rates: res.rates,
          };
        });
    },
  };
}
