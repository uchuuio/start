import { THOUGHT } from './../constants/actionTypes';
import { getTime, addHours } from 'date-fns';

const baseThought = {
  en: '',
  jp: '',
  isFetching: false,
  lastFetched: '',
  nextFetch: '',
  error: false,
};

function settings(state = baseThought, action) {
  const currentTime = getTime(new Date());
  const nextTime = addHours(currentTime, 1);
  switch (action.type) {
    case THOUGHT.REFRESH_STATE:
      return { ...state, isFetching: false, error: false };
    case THOUGHT.FETCH_THOUGHT_PENDING:
      return { ...state, isFetching: true };
    case THOUGHT.FETCH_THOUGHT_FULFILLED:
      return { ...state, en: action.payload.en, jp: action.payload.jp, isFetching: false, lastFetched: currentTime, nextFetch: nextTime };
    case THOUGHT.FETCH_THOUGHT_REJECTED:
      return { ...state, isFetching: false, error: true, lastFetched: currentTime, nextFetch: nextTime };
    default:
      return state;
  }
}

export default settings;
