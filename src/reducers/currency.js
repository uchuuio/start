import { CURRENCY } from './../constants/actionTypes';
import { getTime, addHours } from 'date-fns';

const baseCurrency = {
  base: 'GBP',
  target: 'USD,JPY',
  rates: [],
  isFetching: false,
  lastFetched: '',
  nextFetch: '',
  error: false,
};

function settings(state = baseCurrency, action) {
  const currentTime = getTime(new Date());
  const nextTime = addHours(currentTime, 1);
  switch (action.type) {
    case CURRENCY.REFRESH_STATE:
      return { ...state, isFetching: false, error: false };
    case CURRENCY.FETCH_CURRENCY_PENDING:
      return { ...state, isFetching: true };
    case CURRENCY.FETCH_CURRENCY_FULFILLED:
      return { ...state, isFetching: false, base: action.payload.base, target: action.payload.target, rates: action.payload.rates, lastFetched: currentTime, nextFetch: nextTime };
    case CURRENCY.FETCH_CURRENCY_REJECTED:
      return { ...state, isFetching: false, error: true, lastFetched: currentTime, nextFetch: nextTime };
    case CURRENCY.UPDATE_CURRENCY_SETTING:
      return { ...state, base: action.base, target: action.target, rates: [], lastFetched: '', nextFetch: '' };
    default:
      return state;
  }
}

export default settings;
