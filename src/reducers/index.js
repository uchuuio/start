import { combineReducers } from 'redux';

import currencyReducer from './currency';
import groupReducer from './groups';
import thoughtReducer from './thought';
import settingReducer from './settings';

const reducers = combineReducers({
  settings: settingReducer,
  currency: currencyReducer,
  thought: thoughtReducer,
  groups: groupReducer,
});

export default reducers;
