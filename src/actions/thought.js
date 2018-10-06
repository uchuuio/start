import fetch from 'isomorphic-fetch';

import { THOUGHT } from './../constants/actionTypes';

export function refreshState() {
  return {
    type: THOUGHT.REFRESH_STATE,
  };
}

export function fetchThought() {
  return {
    type: THOUGHT.FETCH_THOUGHT,
    payload: () => {
      return fetch('https://zen.uchuu.io/api')
        .then(response => response.json())
        .then(data => {
          const enThought = data.enthought.replace(/\|/g, '<br />');
          const jpThought = data.jpthought.replace(/\|/g, '<br />');

          return {
            en: enThought,
            jp: jpThought,
          };
        });
    },
  };
}
