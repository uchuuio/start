import fetch from 'isomorphic-fetch';

import { THOUGHT } from './../constants/actionTypes';

export function fetchThought() {
  return {
    type: THOUGHT.FETCH_THOUGHT,
    payload: () => {
      return fetch('https://zen.uchuu.io/api')
        .then(response => response.json())
        .then(data => {
          const enThought = data.thought_en.replace(/\|/g, '<br />');
          const jpThought = data.thought_jp.replace(/\|/g, '<br />');

          return {
            en: enThought,
            jp: jpThought,
          };
        });
    },
  };
}
